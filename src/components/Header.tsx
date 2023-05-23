// "use client"を宣言しない限り全てのComponentはServer Componentsとして解釈される

export function Header() {
  return (
    <header style={{ padding: '12px' }}>
      <h1>Playground</h1>
    </header>
  );
}
