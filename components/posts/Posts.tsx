import { Box } from '@kuma-ui/core';

export async function Posts() {
  const data = await fetch(`http://localhost:3000/api/posts`, { cache: 'no-store' });

  const posts: {
    id: string;
    title: string;
    author: {
      name: string | null;
    } | null;
  }[] = await data.json();

  return (
    <div>
      {posts.map((post) => (
        <Box key={post.id} p={8} bg="blue" color="white" my={16}>
          <p>{post.title}</p>
          <p>{post.author?.name}</p>
        </Box>
      ))}
    </div>
  );
}
