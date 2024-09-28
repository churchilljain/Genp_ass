import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import About from './pages/About';
import SkinCancerInfo from './pages/SkinCancerInfo';
import UserGuide from './pages/UserGuide';
import Contact from './pages/Contact';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <ChakraProvider>
      
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Prediction />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<SkinCancerInfo />} />
          <Route path="/guide" element={<UserGuide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </ChakraProvider>
  );
};

export default App;