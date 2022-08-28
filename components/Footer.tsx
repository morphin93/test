import { Container, Box, Text } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="elvenTools.dark.darker"
      color="elvenTools.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>Apes Football Crew</Box>
        <Box fontSize="xs" fontWeight="hairline">
          Mint an ape and earn ESDT
        </Box>
        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elrond.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Made with Love by
          </Text>{' '}
          ⚡{' '}
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elrond.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            GoodNews
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
