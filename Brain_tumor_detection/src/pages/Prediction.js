// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Heading,
//   Text,
//   VStack,
//   Button,
//   Image,
//   Input,
//   Spinner,
//   Divider,
//   Container,
//   Stack,
//   useColorModeValue,
//   Flex,
// } from '@chakra-ui/react';
// import cancerData from '../Cancerdata'; // Import the cancerData from data.js

// const Footer = () => (
//   <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white" mt={10}>
//     <Text fontSize="sm">© 2024 Skin Cancer Detection. All rights reserved.</Text>
//   </Box>
// );

// const Prediction = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const bgColor = useColorModeValue('gray.50', 'gray.700');
//   const boxBgColor = useColorModeValue('white', 'gray.800');
//   const textColor = useColorModeValue('gray.600', 'gray.300');
//   const headingColor = useColorModeValue('teal.500', 'teal.300');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/predict', formData);
//       setPrediction(response.data); // Assuming response.data contains the predicted label
//     } catch (error) {
//       console.error('Error uploading the file', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderPredictionDetails = () => {
//     if (!prediction) return null;

//     const details = cancerData[prediction.label];

//     return (
//       <Box
//         bg={boxBgColor}
//         boxShadow="xl"
//         p={8}
//         rounded="lg"
//         textAlign="left"
//         mt={8}
//         width={{ base: "full", md: "75%" }}
//         mx="auto"
//       >
//         <Heading as="h2" size="lg" mb={4} color={headingColor}>
//           Predicted: {details.name}
//         </Heading>
//         <Divider my={4} />
//         <VStack align="start" spacing={4}>
//           <Text fontSize="md">
//             <Text as="span" fontWeight="bold">Description:</Text> {details.description}
//           </Text>
//           <Text fontSize="md">
//             <Text as="span" fontWeight="bold">Early Signs:</Text> {details.earlySigns}
//           </Text>
//           <Text fontSize="md">
//             <Text as="span" fontWeight="bold">Prevention Tips:</Text> {details.preventionTips}
//           </Text>
//           <Text fontSize="md">
//             <Text as="span" fontWeight="bold">Remedies:</Text> {details.remedies}
//           </Text>
//           <Text fontSize="md">
//             <Text as="span" fontWeight="bold">Treatment Options:</Text> {details.treatmentOptions}
//           </Text>
//           <Text fontSize="md">
//             <Text as="span" fontWeight="bold">Ways to Slow Down Progression:</Text> {details.slowDownTips}
//           </Text>
//         </VStack>
//       </Box>
//     );
//   };

//   return (
//     <Flex direction="column" minHeight="100vh" bg={bgColor}>
//       <Container maxW="container.lg" py={10} flex="1">
//         <Box textAlign="center" mb={10}>
//           <Heading as="h1" size="2xl" color={headingColor}>
//             Brain Tumor Detection
//           </Heading>
//           <Text fontSize="lg" color={textColor} mt={2}>
//             Upload an image to predict and learn about Brain Tumor types
//           </Text>
//         </Box>
//         <Stack
//           direction={{ base: 'column', md: 'row' }}
//           spacing={4}
//           justify="center"
//           align="center"
//           mb={10}
//         >
//           <Input
//             type="file"
//             onChange={handleFileChange}
//             variant="outline"
//             size="md"
//             width="full"
//             maxW="sm"
//             bg={boxBgColor}
//             color={textColor}
//           />
//           <Button
//             colorScheme="teal"
//             onClick={handleSubmit}
//             size="md"
//             isLoading={loading}
//             loadingText="Predicting"
//             spinnerPlacement="start"
//           >
//             Predict
//           </Button>
//         </Stack>
//         {loading && (
//           <Box textAlign="center" py={6}>
//             <Spinner size="xl" color="teal.500" />
//             <Text mt={4} fontSize="lg" color={textColor}>
//               Analyzing the image...
//             </Text>
//           </Box>
//         )}
//         {!loading && prediction && renderPredictionDetails()}
//       </Container>

//       <Footer />
//     </Flex>
//   );
// };

// export default Prediction;

import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Input,
  Spinner,
  Divider,
  Container,
  Stack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white" mt={10}>
    <Text fontSize="sm">© 2024 Brain Tumor Detection. All rights reserved.</Text>
  </Box>
);

const Prediction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const boxBgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('teal.500', 'teal.300');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(response.data); // Assuming response.data contains the predicted label
    } catch (error) {
      console.error('Error uploading the file', error);
    } finally {
      setLoading(false);
    }
  };

  const renderPredictionDetails = () => {
    if (!prediction) return null;

    const isTumor = prediction.prediction === 0; // 0 for Brain Tumor
    const labelName = isTumor ? 'Brain Tumor' : 'Healthy';

    return (
      <Box
        bg={boxBgColor}
        boxShadow="xl"
        p={8}
        rounded="lg"
        textAlign="left"
        mt={8}
        width={{ base: "full", md: "75%" }}
        mx="auto"
      >
        <Heading as="h2" size="lg" mb={4} color={headingColor}>
          Predicted: {labelName}
        </Heading>
        <Divider my={4} />
        <Text fontSize="md" color={textColor}>
          The analysis indicates that the person is {isTumor ? 'diagnosed with a brain tumor.' : 'healthy.'}
        </Text>
        {/* Optionally, you can add more information about each prediction here */}
      </Box>
    );
  };

  return (
    <Flex direction="column" minHeight="100vh" bg={bgColor}>
      <Container maxW="container.lg" py={10} flex="1">
        <Box textAlign="center" mb={10}>
          <Heading as="h1" size="2xl" color={headingColor}>
            Brain Tumor Detection
          </Heading>
          <Text fontSize="lg" color={textColor} mt={2}>
            Upload an image to predict and learn about brain tumors
          </Text>
        </Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="center"
          align="center"
          mb={10}
        >
          <Input
            type="file"
            onChange={handleFileChange}
            variant="outline"
            size="md"
            width="full"
            maxW="sm"
            bg={boxBgColor}
            color={textColor}
          />
          <Button
            colorScheme="teal"
            onClick={handleSubmit}
            size="md"
            isLoading={loading}
            loadingText="Predicting"
            spinnerPlacement="start"
          >
            Predict
          </Button>
        </Stack>
        {loading && (
          <Box textAlign="center" py={6}>
            <Spinner size="xl" color="teal.500" />
            <Text mt={4} fontSize="lg" color={textColor}>
              Analyzing the image...
            </Text>
          </Box>
        )}
        {!loading && prediction && renderPredictionDetails()}
      </Container>

      <Footer />
    </Flex>
  );
};

export default Prediction;
