import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Wedding Decor',
    description: 'Romantic custom lighting designs',
    image: '/images/Fair6.jpg',
    link: '/wedding',
  },
  {
    title: 'Birthday Parties',
    description: 'Personalized celebration lighting decor',
    image: '/birthday.jpg',
    link: '/birthday-parties',
  },
  {
    title: 'Christmas Parties',
    description: 'Festive themed lighting displays',
    image: '/christmas.jpg',
    link: '/christmas-parties',
  },
  {
    title: 'Kathina Festival',
    description: 'Spiritual respectful lighting solutions',
    image: '/images/Temp2.jpg',
    link: '/kathina-festival',
  },
];

const Event = ({ darkMode }) => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 10, md: 15 },
        px: { xs: 3, sm: 10, md: 15 },
        textAlign: 'center',
        backgroundColor: darkMode ? '#000000' : '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '2.5rem', sm: '2.2rem', md: '3rem' },
          color: darkMode ? '#FFD700' : '#4A4A4A',
          mt: { xs: 5, sm: -3, md: -4 },
          textAlign: 'center',
          mb: { xs: 6, sm: 6, md: 7 },
        }}
      >
        Our Main Events
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}> {/* Changed xs to 12 for full width on mobile */}
            <Box
              sx={{
                width: '100%',
                maxWidth: '400px',
                height: '100%',
                borderRadius: '25px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                textAlign: 'center',
                backgroundColor: darkMode ? '#333' : '#FFFFFF',
                padding: '10px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: darkMode ? '#333' : '#FFFFFF',
                },
                color: darkMode ? '#FFF017' : '#000',
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

export default Event;