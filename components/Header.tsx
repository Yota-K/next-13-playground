import { Box, Heading } from '@kuma-ui/core';
import Link from 'next/link';

// "use client"を宣言しない限り全てのComponentはServer Componentsとして解釈される

export function Header() {
  return (
    <Box as="header" bg="darkslategrey" p={8} mb={32}>
      <Heading as="h1" fontSize={24}>
        <Link href="/" style={{ color: '#fff' }}>
          Playground
        </Link>
      </Heading>
    </Box>
  );
}
