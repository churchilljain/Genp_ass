import React from 'react';
import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white">
    <Text fontSize="sm">© 2024 Brain Tumor Detection. All rights reserved.</Text>
  </Box>
);

const About = () => {
  return (
    <Flex direction="column" minHeight="100vh" bg="gray.900" color="white">
      <Box flex="1" textAlign="center" py={10} px={6}>
        <Heading as="h1" size="2xl" mb={8}>
          About Us
        </Heading>
        
        <VStack spacing={8} alignItems="flex-start" maxW="800px" mx="auto">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Our Mission
            </Heading>
            <Text fontSize="lg">
              Our mission is to empower individuals with the tools to detect Brain Tumor early and effectively.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Our Technology
            </Heading>
            <Text fontSize="lg">
              Using state-of-the-art AI technology, we aim to provide accurate predictions and educational resources.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Our Vision
            </Heading>
            <Text fontSize="lg">
              We envision a world where early detection of Brain Tumor is accessible to everyone, leading to better 
              outcomes and saving lives.
            </Text>
          </Box>
        </VStack>
      </Box>

      <Footer />
    </Flex>
  );
};

export default About;
