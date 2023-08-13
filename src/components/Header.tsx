import { Box, Heading } from '@kuma-ui/core';

// "use client"を宣言しない限り全てのComponentはServer Componentsとして解釈される

export function Header() {
  return (
    <Box as="header" bg="darkslategrey" p={8}>
      <Heading as="h1" fontSize={24}>
        Playground
      </Heading>
    </Box>
  );
}
