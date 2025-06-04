import React, { useEffect } from 'react'; // Import useEffect
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
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={service.title}>
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              darkMode={darkMode}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Event;