import React, { useEffect } from 'react'; // Import useEffect
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';

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

const Event = ({ darkMode }) => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Events & Functions Lighting - Wedding, Birthday, Christmas, Vesak, Kathina Services Sri Lanka"
        description="Explore our event lighting services and decorations for weddings, birthdays, Christmas parties, Vesak, Kathina, Poson festivals and religious ceremonies. Professional decorative lighting solutions for all your special occasions, functions and celebrations in Sri Lanka."
        keywords="event, events, event lighting, functions, function lighting, wedding events, birthday events, Christmas events, Kathina event, Vesak event, Poson event, religious festivals, temple events, decorations, event decorations, celebration lighting, corporate events, private functions, party lighting, Sri Lanka events, Colombo events, Miracle Lighting"
        url="https://miraclelighting.lk/event"
      />
      
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
                  gutterBottom
                  sx={{
                    mt: 5,
                    mb: 5,
                    color: darkMode ? '#FFD700' : '#000000',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    textShadow: darkMode ? '0 2px 4px rgba(255, 215, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                  
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
    </>
  );
};

export default Event;