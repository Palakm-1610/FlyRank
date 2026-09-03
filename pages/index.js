import dynamic from 'next/dynamic';
const Chat = dynamic(() => import('../components/Chat'), { ssr: false });

export default function Home() {
  return (
    <main style={{ padding: 16, maxWidth: 800, margin: '0 auto' }}>
      <h1>Streaming Chat Preview</h1>
      <Chat />
    </main>
  );
}
