import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard'; // Import ServiceCard component

const services = [
  {
    title: 'Wedding Events',
    description: 'Elegant Lights for Your Wedding',
    image: '/images/Fair6.jpg',
    link: '/wedding',
  },
  // {
  //   title: 'Birthday Parties',
  //   description: 'Sparkling Lights to Brighten Your Birthday Bash',
  //   image: '/birthday.jpg',
  //   link: '/birthday-parties',
  // },
  // {
  //   title: 'Christmas Parties',
  //   description: 'Sparkle Bright This Christmas Season',
  //   image: '/christmas.jpg',
  //   link: '/christmas-parties',
  // },
  {
    title: 'Religious Festival',
    description: 'Sacred Glow for Holy Events',
    image: '/images/Temp2.jpg',
    link: '/religious-festivals',
  },
];


const HomeCard = ({ darkMode }) => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 10, md: 15 }, // Adjusts padding for different screen sizes
        px: { xs: 6, sm: 10, md: 15 }, // Reduces side padding on smaller screens
        textAlign: 'center',
        backgroundColor: darkMode ? '#000000' : '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: darkMode ? '#FFD700' : '#4A4A4A', mb: 7 }}
      >
        Main Events
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box
              sx={{
                maxWidth: '320px',
                height: '100%',
                borderRadius: '25px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                textAlign: 'center',
                backgroundColor: darkMode ? '#666' : '#ffffff', // Gray in dark mode, white in light mode
                padding: '10px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: darkMode ? '#555' : '#f0f0f0', // Darker gray on hover in dark mode, light gray in light mode
                },
                color: darkMode ? '#FFF017' : '#000', // Yellow text in dark mode, black text in light mode
              }}
            >
              <ServiceCard {...service} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCard;
