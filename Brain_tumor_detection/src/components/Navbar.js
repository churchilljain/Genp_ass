import React from 'react';
import { Box, Flex, Button, useColorModeValue, Stack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box cursor={'pointer'} onClick={() => {navigate('/')}}>Brain Tumor Detection</Box>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button as={Link} to="/predict">Prediction</Button>
            <Button as={Link} to="/about">About</Button>
            <Button as={Link} to="/info">Info</Button>
            <Button as={Link} to="/guide">User Guide</Button>
            <Button as={Link} to="/contact">Contact</Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
