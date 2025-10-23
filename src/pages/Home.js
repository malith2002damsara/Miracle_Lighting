import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Box} from '@mui/material';
import HomeCard from '../components/HomeCard';
import HomeVideo from '../components/HomeVideo';
import Slider from '../components/Slider';
import ImageAnimation from '../components/imageanimaton';
import Navbar from '../components/Navbar'; // Import your Navbar
import SEO from '../components/SEO'; // Import SEO Component
// Footer is not imported anymore, since we are removing it
// import Footer from '../components/Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* SEO Meta Tags for Home Page */}
      <SEO 
        title="Miracle Lighting | Wedding & Event Decorative Lights in Sri Lanka"
        description="Transform your special occasions with Miracle Lighting's stunning decorative lighting solutions. Expert wedding, Kathina festival, Christmas and birthday party lighting services across Sri Lanka."
        keywords="wedding lights, event lighting, decorative lights, Sri Lanka, Miracle Lighting, Kathina festival lights, Christmas party lights, birthday party lights"
        url="https://miraclelighting.lk"
      />

      {/* Navbar Section */}
      <Navbar toggleDarkMode={() => setDarkMode(prev => !prev)} darkMode={darkMode} />


      {/* Main Container */}
      <Box
        sx={{
          backgroundColor: darkMode ? '#000' : '#FFF', // Set background color based on darkMode
          color: darkMode ? '#FFF' : '#000', // Set text color for better readability
          minHeight: '100vh', // Ensure the box covers the full height of the viewport
        }}
      >
        {/* Hero Section */}
        <Hero />

        {/* Video and Right Side Content Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 10,
            px: 4,
            flexWrap: 'wrap', // Ensure responsiveness on smaller screens
          }}
        >
          <HomeVideo darkMode={darkMode} /> {/* Pass the darkMode state */}
        </Box>

        <div>
          <Slider /> {/* Add the Slider component here */}
        </div>

        {/* Right Side Carousel */}
        <Box sx={{ width: '100%', py: 6 }}>
          <ImageAnimation darkMode={darkMode} /> {/* Pass darkMode prop */}
        </Box>

        {/* Services Section */}
        <HomeCard darkMode={darkMode} /> {/* Pass the darkMode state */}

      </Box>
    </>
  );
};

export default Home;
