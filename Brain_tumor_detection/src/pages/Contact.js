import React from 'react';
import { Box, Heading, VStack, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Contact Us
      </Heading>
      <VStack spacing={4} alignItems="flex-start">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="teal">Send Message</Button>
      </VStack>
    </Box>
  );
};

export default Contact;
