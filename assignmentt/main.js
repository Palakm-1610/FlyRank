const canvas = document.getElementById('shader-canvas');
const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });

if (!gl) {
  document.body.style.background = 'linear-gradient(135deg, #0a1120, #050a14)';
  console.warn('WebGL unavailable. Falling back to a static gradient background.');
} else {
  const vertexSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;

    // hash/noise helpers: they break the pattern into gentle, organic motion.
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = p * 2.0 + 18.1;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      vec2 mouse = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

      // Mouse influence steers the flow field gently, so the background feels reactive without becoming noisy.
      vec2 drift = uv + mouse * 1.25;
      float flow = fbm(drift * 2.7 + vec2(u_time * 0.08, -u_time * 0.12));
      float wave = sin((uv.y * 10.0 + flow * 6.0) - u_time * 0.9 + length(uv - mouse) * 7.0);

      // Slow ribbons of color create the aura-like bands. The mouse subtly shifts the center of gravity.
      float ribbonA = smoothstep(0.15, 1.0, wave + flow * 0.75);
      float ribbonB = smoothstep(0.2, 1.1, sin((uv.x * 7.5 + flow * 4.0) - u_time * 0.7 + noise(uv * 5.0 + u_time * 0.2) * 3.0));
      float glow = exp(-length(uv - mouse) * 3.5);

      vec3 base = vec3(0.03, 0.07, 0.12);
      vec3 cyan = vec3(0.31, 0.85, 0.82);
      vec3 violet = vec3(0.68, 0.44, 1.0);
      vec3 amber = vec3(0.98, 0.76, 0.48);

      vec3 color = base;
      color += cyan * ribbonA * 0.95;
      color += violet * ribbonB * 0.82;
      color += amber * glow * 0.85;

      // A vignette keeps the energy focused in the center and preserves readability over the headline.
      float vignette = 1.0 - smoothstep(1.1, 2.4, length(uv));
      color *= vignette;

      // Film grain matters here; it adds depth while staying subtle enough not to fight the text.
      float grain = fract(sin(dot(gl_FragCoord.xy + u_time * 18.0, vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.09;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  const program = createProgram(vertexShader, fragmentShader);

  const positionLocation = gl.getAttribLocation(program, 'a_position');
  const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
  const timeLocation = gl.getUniformLocation(program, 'u_time');
  const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]),
    gl.STATIC_DRAW
  );

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hiddenState = { paused: false };
  let startTime = performance.now();
  let lastFrame = performance.now();
  let animationTime = 0;
  let pointerX = window.innerWidth * 0.5;
  let pointerY = window.innerHeight * 0.5;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.floor(window.innerWidth * dpr);
    const height = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function handlePointerMove(event) {
    pointerX = event.clientX;
    pointerY = event.clientY;
  }

  function handleVisibilityChange() {
    hiddenState.paused = document.hidden;
  }

  document.addEventListener('pointermove', handlePointerMove);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();

  function renderFrame(nowMs) {
    const dt = nowMs - lastFrame;
    lastFrame = nowMs;

    if (!hiddenState.paused && !prefersReducedMotion) {
      animationTime += dt * 0.001;
    }

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, animationTime);
    gl.uniform2f(mouseLocation, pointerX, canvas.height - pointerY);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    if (!prefersReducedMotion) {
      requestAnimationFrame(renderFrame);
    }
  }

  if (prefersReducedMotion) {
    animationTime = 0;
    renderFrame(performance.now());
  } else {
    requestAnimationFrame(renderFrame);
  }

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      throw new Error('Shader compilation failed');
    }

    return shader;
  }

  function createProgram(vertexShader, fragmentShader) {
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(shaderProgram));
      throw new Error('Program linking failed');
    }

    return shaderProgram;
  }
}
