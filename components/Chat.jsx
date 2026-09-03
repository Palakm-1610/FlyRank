import React, { useEffect, useRef, useState } from 'react';
import '../styles/chat.module.css';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const controllerRef = useRef(null);
  const bufferRef = useRef('');
  const listRef = useRef(null);
  const [isPinned, setIsPinned] = useState(true);

  useEffect(() => {
    const el = listRef.current; if (!el) return; const onScroll = () => { const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 20; setIsPinned(atBottom); }; el.addEventListener('scroll', onScroll); return () => el.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { if (isPinned && listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight; }, [messages, isPinned]);

  const appendToken = (token) => {
    bufferRef.current += String(token);
    setMessages(ms => {
      const copy = [...ms];
      if (copy.length === 0 || copy[copy.length -1].role !== 'assistant') copy.push({ role: 'assistant', content: bufferRef.current }); else copy[copy.length -1] = { ...copy[copy.length -1], content: bufferRef.current };
      return copy;
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return; const userMsg = { role: 'user', content: input }; const next = [...messages, userMsg]; setMessages(next); setInput(''); setIsStreaming(true); setIsThinking(true); bufferRef.current = '';
    const controller = new AbortController(); controllerRef.current = controller;
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: next }), signal: controller.signal }); if (!res.body) throw new Error('no body'); const reader = res.body.getReader(); const decoder = new TextDecoder(); let buf = ''; let gotFirst = false;
      while (true) {
        const { value, done } = await reader.read(); if (done) break; buf += decoder.decode(value, { stream: true }); const parts = buf.split(/\n\n/); buf = parts.pop(); for (const part of parts) { const m = part.match(/^data: (.*)$/s); if (!m) continue; const payload = m[1]; try { const parsed = JSON.parse(payload); if (parsed.token) { if (!gotFirst) { setIsThinking(false); gotFirst = true; } appendToken(parsed.token); } else if (parsed.raw) { if (!gotFirst) { setIsThinking(false); gotFirst = true; } appendToken(parsed.raw); } } catch (e) { appendToken(payload); } }
      }
    } catch (e) { if (e.name !== 'AbortError') console.error(e); } finally { setIsStreaming(false); setIsThinking(false); controllerRef.current = null; }
  };

  const handleStop = () => { if (controllerRef.current) controllerRef.current.abort(); setIsStreaming(false); setIsThinking(false); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '60vh' }}>
      <div ref={listRef} style={{ flex: 1, overflow: 'auto', padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
        {messages.map((m,i) => (<div key={i} style={{ textAlign: m.role==='user'? 'right':'left', margin: '8px 0' }}><div style={{ fontSize:12,color:'#6b7280' }}>{m.role}</div><div style={{ display:'inline-block', background:'#f3f4f6', padding:8, borderRadius:6, maxWidth:'85%' }}>{m.content}</div></div>))}
        {isThinking && (<div style={{ textAlign:'left', margin:'8px 0' }}><div style={{ fontSize:12,color:'#6b7280' }}>assistant</div><div style={{ display:'inline-block', background:'#f3f4f6', padding:8, borderRadius:6 }}><em>Thinking...</em></div></div>)}
      </div>
      {!isPinned && (<button onClick={() => { const el = listRef.current; if (el) { el.scrollTop = el.scrollHeight; setIsPinned(true); } }} style={{ position:'absolute', right:20, bottom:110 }}>Jump to latest</button>)}
      <div style={{ display:'flex', gap:8, marginTop:8 }}>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={2} style={{ flex:1, padding:8, borderRadius:8 }} />
        <div style={{ display:'flex', gap:8 }}>
          <button onClick={handleSend} disabled={isStreaming||!input.trim()} style={{ background:'#2563eb', color:'white', padding:'8px 12px', borderRadius:6 }}>Send</button>
          <button onClick={handleStop} disabled={!isStreaming} style={{ background:'#ef4444', color:'white', padding:'8px 12px', borderRadius:6 }}>Stop</button>
        </div>
      </div>
    </div>
  );
}
