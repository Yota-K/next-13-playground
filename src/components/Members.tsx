export async function Members() {
  // fetchのオプションに no-store を指定すると、従来のSSRと同等の挙動になる
  // https://nextjs.org/docs/app/api-reference/functions/fetch
  const data = await fetch(`http://localhost:3000/api/slow-endpoint`, { cache: 'no-store' });
  const members: { name: string; age: number }[] = await data.json();

  return (
    <ul>
      {members.map((member) => (
        <li key={member.name}>
          <p>{member.name}</p>
          <p>{member.age}</p>
        </li>
      ))}
    </ul>
  );
}
