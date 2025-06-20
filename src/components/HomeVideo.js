import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeVideo = ({ darkMode }) => {
  return (
    <>
      {/* First Image Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          mb: { xs: 4, md: 8 },
          gap: 4,
        }}
      >
        {/* First Image */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 2, md: 0 },
          }}
        >
          <img
            src="/images/About1.jpg"
            alt="Miracle Lighting Event"
            style={{
              width: '100%',
              height: '80%',
              maxHeight: '550px',
              borderRadius: '10px',
              boxShadow: darkMode ? '0 0 20px rgba(255, 215, 0, 0.5)' : '0 0 20px rgba(0,0,0,0.2)',
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* First Content Section */}
        <Box
          sx={{
            width: { xs: '90%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: { xs: 2, md: 4 },
            color: darkMode ? '#FFD700' : '#4A4A4A',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: darkMode ? '#FFD700' : '#4A4A4A', }}>
            Transform Your Events With Miracle Lighting
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
            At Miracle Lighting, we specialize in creating breathtaking lighting designs that elevate any occasion. 
            From intimate gatherings to grand celebrations, our lighting solutions add that special sparkle.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
            Our team of lighting experts works closely with you to design custom solutions that match your vision 
            and create unforgettable atmospheres.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: darkMode ? '#FFD700' : '#4A4A4A',
              color: darkMode ? '#000' : '#FFF',
              '&:hover': {
                backgroundColor: darkMode ? '#4A4A4A' : '#FFD700',
                color: darkMode ? '#FFF' : '#000',
              }
            }}
            component={Link}
            to="/event"
          >
            Explore Our Events
          </Button>
        </Box>
      </Box>

      {/* Second Image Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          mb: { xs: 4, md: 8 },
          gap: 4,
        }}
      >
        {/* Second Content Section */}
        <Box
          sx={{
            width: { xs: '90%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: { xs: 2, md: 4 },
            color: darkMode ? '#FFD700' : '#4A4A4A',
            order: { xs: 2, md: 1 }
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: darkMode ? '#FFD700' : '#4A4A4A', }}>
            Custom Lighting Designs For Every Occasion
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
            Whether you're planning a wedding, corporate event, or private party, our lighting designs 
            can transform any space into a magical environment.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
            We offer a wide range of lighting options including string lights, up-lighting, pathway lighting, 
            and custom installations tailored to your specific needs.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: darkMode ? '#FFD700' : '#4A4A4A',
              color: darkMode ? '#000' : '#FFF',
              '&:hover': {
                backgroundColor: darkMode ? '#4A4A4A' : '#FFD700',
                color: darkMode ? '#FFF' : '#000',
              }
            }}
            component={Link}
            to="/gallery"
          >
            View Our Gallery
          </Button>
        </Box>

        {/* Second Image */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 2, md: 0 },
            order: { xs: 1, md: 2 }
          }}
        >
          <img
            src="/images/Cano5.jpg"
            alt="Custom Lighting Design"
            style={{
              width: '80%',
              height: '80%',
              maxHeight: '550px',
              borderRadius: '10px',
              boxShadow: darkMode ? '0 0 20px rgba(255, 215, 0, 0.5)' : '0 0 20px rgba(0,0,0,0.2)',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomeVideo;