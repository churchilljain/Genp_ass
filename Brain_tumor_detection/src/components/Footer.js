import React from 'react';
import { Box, Flex, Text, IconButton, Stack, Link } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.300" py={8}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
      >
        {/* Logo or Brand Name */}
        <Text fontSize="xl" fontWeight="bold" color="teal.400">
          Brain Tumor Detection
        </Text>

        {/* Navigation Links */}
        <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
          <Link href="#" _hover={{ color: 'teal.300' }}>
            Home
          </Link>
          <Link href="#" _hover={{ color: 'teal.300' }}>
            About
          </Link>
          <Link href="#" _hover={{ color: 'teal.300' }}>
            User Guide
          </Link>
          <Link href="#" _hover={{ color: 'teal.300' }}>
            Contact
          </Link>
        </Stack>

        {/* Social Media Links */}
        <Stack direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
          <IconButton
            as="a"
            href="#"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            color="teal.400"
            _hover={{ bg: 'gray.700' }}
          />
          <IconButton
            as="a"
            href="#"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            color="teal.400"
            _hover={{ bg: 'gray.700' }}
          />
          <IconButton
            as="a"
            href="#"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            color="teal.400"
            _hover={{ bg: 'gray.700' }}
          />
          <IconButton
            as="a"
            href="#"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            color="teal.400"
            _hover={{ bg: 'gray.700' }}
          />
        </Stack>
      </Flex>

      {/* Copyright Notice */}
      <Text textAlign="center" mt={6} fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} Brain Tumor Detection. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
