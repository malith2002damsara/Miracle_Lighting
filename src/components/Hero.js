import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({darkMode}) => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', // Distribute space evenly
        textAlign: 'center',
        padding: { xs: 2, sm: 4 },
        overflow: 'hidden',
        backgroundImage: 'url(/images/pages/Hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: { xs: '10vh', sm: '15vh' }, // Adjust top padding for text placement
        //color: darkMode ? '#FFD700' : '#4A4A4A',      
      }}
    >
      {/* Text Container */}
      <Box sx={{ width: '80%', maxWidth: '800px' }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: '#FFD700',
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            textShadow: '4px 4px 4px #4A4A4A',
           // WebkitTextStroke: '1px #FFFFFF' // Adds a black outline around the text
          }}
          
          
        >
          Light up your special day with Miracle Lighting
        </Typography>
        <Typography
  variant="h5"
  gutterBottom
  sx={{
    color: '#FFD700',
    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
    pt: 5, // Add top padding here (e.g., theme spacing unit * 3)
  }}
>
  Stunning lighting designs for your dream wedding
</Typography>

      </Box>

      {/* Button Container */}
      <Box
  sx={{
    position: 'absolute', // Absolute positioning to place it anywhere
    top: '50%', // Move it to the middle
    left: '50%', // Move it to the middle
    transform: 'translate(-50%, -50%)', // Adjust positioning precisely
    display: 'flex',
    justifyContent: 'center',
  }}
>
<Button
  variant="contained"
  sx={{
    bgcolor: '#FFD700', // Button background color
    color: '#4A4A4A', // Initial text color
    fontSize: { xs: '0.8rem', sm: '1rem' },
    mt: 6,
    padding: { xs: '8px 16px', sm: '10px 20px' },
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition effect
    '&:hover': {
      bgcolor: '#4A4A4A', // Background changes to black on hover
      color: '#FFD700', // Text color changes to gold on hover
    },

  }}
  component={Link}
  to="/services"
>
  Explore Our Services
</Button>

</Box>

    </Box>
  );
};

export default Hero;
