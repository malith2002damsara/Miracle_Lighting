import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ServiceCard from '../components/ServiceCard'; // Assuming ServiceCard is in the same directory
import SEO from '../components/SEO'; // Import SEO Component

const services = [
  { title: 'Indoor Lighting', description: 'Elegant Ambience for Indoor Events', image: '/images/Indo1.jpg', link: '/indoor-lighting' },
  { title: 'Outdoor Lighting', description: 'Enchant Your Outdoor Celebrations', image: '/images/Outd2.jpg', link: '/outdoor-lighting' },
  { title: 'Backdrop Lighting', description: 'Glow Up Your Backdrops', image: '/images/Back8.jpg', link: '/backdrop-lighting' },
  { title: 'Chandeliers', description: 'Classic Luxury with Chandeliers', image: '/images/Chan2.jpg', link: '/Chandeliers' },
  { title: 'Chinese Lanterns', description: 'Cultural Beauty in Every Glow', image: '/images/Chin4.jpg', link: '/Chinese-Lanterns' },
  // { title: 'Christmas Tree Lights', description: 'Sparkling Trees for Christmas', image: '/images/Tree1.jpg', link: '/Christmas-Tree-Lights' },
  { title: 'Fairy Lights', description: 'Magical Touch with Fairy Lights', image: '/images/Fair5.jpg', link: '/Fairy-Lights' },
  { title: 'Festoon Lights', description: 'Vintage Charm with Festoon Lights', image: '/images/Fest8.jpg', link: '/Festoon-Lights' },
  { title: 'LightUp Letters', description: 'Say It with Bright Letters', image: '/images/Lett5.jpg', link: '/Light-Up-Letters' },
  // { title: 'LightUp Reindeer Or Snowman', description: 'Festive Figures that Glow Bright', image: '/images/Deer1.jpg', link: '/Light-up-Reindeer-or-Snowman' },
  { title: 'Pathway Lights', description: 'Guide Guests with Style', image: '/images/Path1.jpg', link: '/Pathway-Lights' },
  { title: 'Temple Decorative Lighting', description: 'Sacred Beauty with Lighting Art', image: '/images/Temp1.jpg', link: '/Temple-Decorative-Lighting' },
  { title: 'Up Lighting', description: 'Elevate Spaces with Up Lighting', image: '/images/Up8.jpg', link: '/Up-lighting' },
  { title: 'Canopy String Lights', description: 'Starry Nights Under a Canopy', image: '/images/Cano1.jpg', link: '/Canopy-String-Lights' },
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
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <Box sx={{
      py: 10,
      px: 2,
      textAlign: 'center',
      backgroundColor: darkMode ? '#121212' : '#ffffff',
      minHeight: '100vh'
    }}>
      {/* SEO Meta Tags for Services Page */}
      <SEO 
        title="Our Services | Miracle Lighting - Wedding, Birthday, Christmas & Festival Lighting Sri Lanka"
        description="Explore our comprehensive decorative lighting services including indoor, outdoor, backdrop lighting, chandeliers, fairy lights, festoon lights, temple decorations, birthday party lights, Christmas party lights, Vesak and Kathina festival lighting for weddings and events in Sri Lanka."
        keywords="lighting services, event lighting, wedding decoration, birthday party lights, Christmas party lights, celebration lighting, party decoration, indoor lighting, outdoor lighting, fairy lights, chandeliers, temple lighting, Vesak decorations, Kathina festival, Poson lighting, Buddhist ceremony lights, festive lights, holiday lighting, kids party lights, Sri Lanka"
        url="https://miraclelighting.lk/services"
      />

      <Typography
                       variant="h3"
                       gutterBottom
                       sx={{
                         mt: 4,
                         mb: 5,
                         color: darkMode ? '#FFD700' : '#000000',
                         textAlign: 'center',
                         fontWeight: 'bold',
                         textShadow: darkMode ? '0 2px 4px rgba(255, 215, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
                         position: 'relative',
                       
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