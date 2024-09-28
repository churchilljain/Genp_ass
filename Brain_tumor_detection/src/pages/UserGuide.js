import React from 'react';
import { Box, Heading, Text, VStack, Icon, Divider } from '@chakra-ui/react';
import { FaUpload, FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';
// import step1Video from '../assets/step1.mp4';
// import step2Video from '../assets/step2.mp4';
// import step3Video from '../assets/step3.mp4';

const UserGuide = () => {
  return (
    <Box textAlign="center" py={10} px={6} bg="gray.800" color="white" minH="100vh">
      <Heading as="h1" size="2xl" mb={8} color="teal.400">
        How to Use the Skin Cancer Detection App
      </Heading>
      <VStack spacing={10} alignItems="flex-start" mx="auto" maxW="3xl" px={4}>
        
        {/* Step 1 */}
        <Box textAlign="left">
          <Icon as={FaUpload} w={10} h={10} color="teal.400" mb={4} />
          <Heading as="h2" size="lg" mb={2} color="teal.300">
            Step 1: Upload an Image
          </Heading>
          <Text fontSize="md" color="gray.300">
            Start by selecting a clear and well-lit image of the area of skin you wish to analyze. 
            The image should focus on the mole or spot, without any obstructions or shadows.
          </Text>
          <Box 
            as="video"
            // src={step1Video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            mt={4}
            rounded="lg"
            shadow="md"
            border="1px solid"
            borderColor="gray.700"
          />
        </Box>

        <Divider borderColor="gray.600" />

        {/* Step 2 */}
        <Box textAlign="left">
          <Icon as={FaRegLightbulb} w={10} h={10} color="teal.400" mb={4} />
          <Heading as="h2" size="lg" mb={2} color="teal.300">
            Step 2: Click Predict
          </Heading>
          <Text fontSize="md" color="gray.300">
            Once you've uploaded the image, click on the "Predict" button. The system will analyze the image and 
            provide a prediction of the skin condition. This may take a few moments.
          </Text>
          <Box 
            as="video"
            // src={step2Video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            mt={4}
            rounded="lg"
            shadow="md"
            border="1px solid"
            borderColor="gray.700"
          />
        </Box>

        <Divider borderColor="gray.600" />

        {/* Step 3 */}
        <Box textAlign="left">
          <Icon as={FaCheckCircle} w={10} h={10} color="teal.400" mb={4} />
          <Heading as="h2" size="lg" mb={2} color="teal.300">
            Step 3: Review the Results
          </Heading>
          <Text fontSize="md" color="gray.300">
            After the analysis is complete, the app will display the predicted condition along with detailed 
            information about the type of skin cancer, early signs, prevention tips, and potential treatments.
          </Text>
          <Box 
            as="video"
            // src={step3Video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            mt={4}
            rounded="lg"
            shadow="md"
            border="1px solid"
            borderColor="gray.700"
          />
        </Box>

      </VStack>
    </Box>
  );
};

export default UserGuide;
