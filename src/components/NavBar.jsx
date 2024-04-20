import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

import ROUTES from '../router/routes';

export default function NavBar() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Center>
        <HStack>
          {ROUTES.map((route) => {
            return (
              <Link to={route.path} key={route.path}>
                <Button variant="link" sx={{ mr: 4 }}>
                  {route.label}
                </Button>
              </Link>
            );
          })}
        </HStack>
      </Center>

      <Box sx={{ position: 'absolute', top: 6, right: 6 }}>
        <IconButton
          aria-label="Toggle dark mode"
          onClick={toggleColorMode}
          icon={<MoonIcon />}
        />
      </Box>
    </>
  );
}
