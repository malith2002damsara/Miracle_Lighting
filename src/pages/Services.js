import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ServiceCard from '../components/ServiceCard'; // Assuming ServiceCard is in the same directory

const services = [
  { title: 'Indoor Lighting', description: 'Custom interior event lighting', image: '/images/indoor-lighting-1.jpg', link: '/indoor-lighting' },
  { title: 'Outdoor Lighting', description: 'Stylish weatherproof outdoor lighting', image: '/images/outdoor-lighting-1.jpg', link: '/outdoor-lighting' },
  { title: 'Backdrop Lighting', description: 'Dramatic background lighting enhancements', image: '/images/backdrop-lighting-1.jpg', link: '/backdrop-lighting' },
  { title: 'Chandeliers', description: 'Elegant hanging decorative lighting', image: '/images/chandelier-1.jpg', link: '/Chandeliers' },
  { title: 'Chinese Lanterns', description: 'Soft-glow cultural lantern lighting', image: '/images/chinese-lanterns-1.jpg', link: '/Chinese-Lanterns' },
  { title: 'Christmas Tree Lights', description: 'Festive tree lighting displays', image: '/images/christmas-tree-lights-1.jpg', link: '/Christmas-Tree-Lights' },
  { title: 'Fairy Lights', description: 'Magical tiny twinkling lights', image: '/images/fairy-lights-1.jpg', link: '/Fairy-Lights' },
  { title: 'Festoon Lights', description: 'Warm vintage-style hanging lights', image: '/images/festoon-lights-1.jpg', link: '/Festoon-Lights' },
  { title: 'LightUp Letters', description: 'Illuminated decorative word displays', image: '/images/light-up-letters-1.jpg', link: '/Light-Up-Letters' },
  { title: 'LightUp Reindeer Or Snowman', description: 'Festive glowing holiday figures', image: '/images/reindeer-snowman-1.jpg', link: '/Light-up-Reindeer-or-Snowman' },
  { title: 'Pathway Lights', description: 'Decorative guided walkway lighting', image: '/images/pathway-lights-1.jpg', link: '/Pathway-Lights' },
  { title: 'String Lights', description: 'Classic hanging string bulbs', image: '/images/string-lights-1.jpg', link: '/String-Lights' },
  { title: 'Up Lighting', description: 'Colorful wall wash lighting', image: '/images/up-lighting-1.jpg', link: '/Up-lighting' },
];

const Services = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);

  // Auto-scroll to top on component mount
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ 
      py: 10, 
      px: 2, 
      textAlign: 'center',
      backgroundColor: darkMode ? '#121212' : '#ffffff',
      minHeight: '100vh'
    }}>
      <Typography 
        variant="h3" 
        sx={{ 
          color: darkMode ? '#FFD700' : '#000000', 
          mb: 8, 
          mt: 2,
          fontWeight: 'normal ',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
      >
        Our Services
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

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: darkMode ? '#FFD700' : '#4A4A4A',
            color: darkMode ? '#000000' : '#FFFFFF',
            '&:hover': {
              backgroundColor: darkMode ? '#FFFFFF' : '#FFD700',
              color: darkMode ? '#000000' : '#000000',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Services;