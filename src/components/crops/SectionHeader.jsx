import { Text } from '@chakra-ui/react';

export default function SectionHeader({ children }) {
  return (
    <Text fontSize="lg" sx={{ color: 'teal.300', textTransform: 'uppercase' }}>
      {children}
    </Text>
  );
}
