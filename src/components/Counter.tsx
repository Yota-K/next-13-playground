'use client';

import { useState } from 'react';

// クライアントサイドでしか実行できない処理を含むComponentはクライアントサイドComponentとして扱う必要がある
// https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Client side component</h1>
      <button
        style={{
          background: 'red',
          padding: '12px',
          maxWidth: '120px',
          width: '100%',
        }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
}
