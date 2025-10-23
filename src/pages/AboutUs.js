import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import SEO from '../components/SEO';

// Keyframes for wave-like animation
const waveAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for animations from left and right
const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AboutUs = ({ darkMode }) => {
  const [aboutUsWords, setAboutUsWords] = useState([]);
  const [missionWords, setMissionWords] = useState([]);

  // Full texts
  const fullAboutUsText =
    "Welcome to Miracle Lighting! We are a leading provider of innovative and stunning lighting solutions for various events and occasions. Since 2017, we have provided 7 years of expertise in creating unique and mesmerizing ambiance for weddings, birthday parties, Christmas parties, Religious Festival, and more. Our experienced team customizes lighting to suit your specific needs, ensuring each event is unforgettable. Whether it's soft, romantic lighting for a wedding or vibrant, festive lighting for a party, we specialize in bringing your vision to life. Let us light up your world!";
  const fullMissionText =
    "Our mission is to provide high-quality, creative, and customized lighting solutions that transform your events into memorable experiences. We are committed to offering the best customer service and ensuring every event is illuminated to perfection. Our vision is to become the premier lighting provider for all types of events, from weddings to corporate functions, by continuing to innovate and exceed expectations. We aim to inspire through lighting and enhance the beauty of every occasion.";

  useEffect(() => {
  // Split the texts into words for About Us and Mission sections
    setAboutUsWords(fullAboutUsText.split(' '));
    setMissionWords(fullMissionText.split(' '));
  }, []);

  // Function to render words with wave-like animation
  const renderWordsWithWave = (words) => {
    return words.map((word, index) => (
      <Typography
        key={index}
        component="span"
        sx={{
          display: 'inline-block',
          animation: `${waveAnimation} 0.6s ease-out`,
          animationDelay: `${index * 0.05}s`, // Stagger the delay for each word
          opacity: 0, // Initial state before animation
          animationFillMode: 'forwards', // Ensure the animation stays at the final state
          marginRight: '4px', // Space between words
        }}
      >
        {word}
      </Typography>
    ));
  };

  return (
    <>
      <SEO 
        title="About Us | Miracle Lighting - Professional Event Lighting Sri Lanka"
        description="Learn about Miracle Lighting, Sri Lanka's trusted provider of decorative lighting for weddings, festivals, and special events since 2017. 7 years of expertise in creating unique and mesmerizing ambiance."
        keywords="about Miracle Lighting, event lighting company, wedding lighting Sri Lanka, professional lighting services, decorative lighting experts"
        url="https://miraclelighting.lk/about-us"
      />
      
      <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/images/About.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        px: 4,
        py: 6,
      }}
    >
      {/* Overlay for better readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          zIndex: 0,
        }}
      />

      {/* Single-Column Layout */}
<Grid container spacing={6} sx={{ position: 'relative', zIndex: 1, flexDirection: 'column' }}>
  
  {/* About Us Section */}
  <Grid item xs={12} sx={{ textAlign: 'center' }}> {/* Center the entire section */}
    <Box sx={{ animation: `${fadeInFromLeft} 1s ease-out` }}>
     <Typography
                 variant="h3"
                 gutterBottom
                 sx={{
                   mt: 9,
                   mb: 5,
                   color: darkMode ? '#FFD700' : '#FFD700',
                   textAlign: 'center',
                   fontWeight: 'bold',
                   
                   position: 'relative',
                 
                 }}
               >
        About Us
      </Typography>
      <Box sx={{ color: darkMode ? '#FFD700' : '#FFD700', lineHeight: 1.6, display: 'inline-block', textAlign: 'center' }}>
        {renderWordsWithWave(aboutUsWords)}
      </Box>
    </Box>
  </Grid>

  {/* Mission and Vision Section */}
  <Grid item xs={12} sx={{ textAlign: 'center' }}> {/* Center the entire section */}
    <Box sx={{ animation: `${fadeInFromRight} 1s ease-out` }}>
      <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    mt: 5,
                    mb: 5,
                    color: darkMode ? '#FFD700' : '#FFD700',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    
                    position: 'relative',
                  
                  }}
                >
        Our Mission & Vision
      </Typography>
      <Box sx={{ color: darkMode ? '#FFD700' : '#FFD700', lineHeight: 1.6, display: 'inline-block', textAlign: 'center' }}>
        {renderWordsWithWave(missionWords)}
      </Box>
    </Box>
  </Grid>

</Grid>

    </Container>
    </>
  );
};

export default AboutUs;
