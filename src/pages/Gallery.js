import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useLocation } from 'react-router-dom';

const Gallery = ({ darkMode }) => {
  const location = useLocation();
  const categories = {
    wedding: ['/wedding1.jpg', '/wedding2.jpg', '/wedding3.jpg', '/wedding4.jpg', '/wedding5.jpg', '/wedding6.jpg', '/wedding7.jpg', '/wedding8.jpg'],
    kathina: ['/kathina1.jpg', '/kathina2.jpg', '/kathina3.jpg'],
    birthday: ['/birthday1.jpg', '/birthday2.jpg', '/birthday3.jpg'],
    christmas: ['/christmas1.jpg', '/christmas2.jpg', '/christmas3.jpg']
  };

  // Check for preselected category from navigation state
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.selectedCategory || null
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleReset = () => {
    setSelectedCategory(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // If there's a preselected category in the location state, set it
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  return (
    <Box sx={{ py: 10, px: 2, position: 'relative' }}>
       <Typography 
        variant="h3" 
        sx={{ color: darkMode ? '#FFD700' : '#4A4A4A', mt: 1, textAlign:'center', mb: 7 }}
      >
        Gallery
      </Typography>

      {!selectedCategory ? (
        <Grid container spacing={4} mb={4}>
          {Object.keys(categories).map((category) => (
            <Grid item key={category} xs={12} sm={6} md={3}>
              <Card
                onClick={() => handleCategoryChange(category)}
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: darkMode ? '0 8px 16px rgba(255, 215, 0, 0.3)' : '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  border: darkMode ? '1px solid #FFD700' : '1px solid #e0e0e0',
                }}
              >
                <CardMedia
                  component="img"
                  height="340"
                  image={categories[category][0]}
                  alt={`Category ${category}`}
                  sx={{
                    filter: 'brightness(0.7)',
                    transition: 'filter 0.3s, transform 0.3s',
                    '&:hover': {
                      filter: 'brightness(1)',
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <IconButton
            onClick={handleReset}
            sx={{
              position: 'fixed',
              top: 80,
              left: 30,
              zIndex: 1200,
              color: '#4A4A4A',
              backgroundColor: darkMode ? '#FFD700' : '#1E90FF',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: darkMode ? '#e6c200' : '#187bcd',
                transform: 'scale(1.1)',
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              mb: 4,
              color: darkMode ? '#FFD700' : '#4A4A4A',
                '&::after': {
            content: '""',
            display: 'block',
            width: '100px',
            height: '4px',
            background: darkMode ? '#FFD700' : '#4A4A4A',
            margin: '20px auto',
            borderRadius: '2px',
          },
            }}
          >
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Events
          </Typography>

          <Grid container spacing={4}>
            {categories[selectedCategory].map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Zoom>
                  <Box
                    component="img"
                    src={image}
                    alt={`${selectedCategory} event ${index}`}
                    sx={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: 2,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: darkMode ? '0 8px 16px rgba(255, 215, 0, 0.4)' : '0 8px 16px rgba(30, 144, 255, 0.4)',
                      },
                      cursor: 'pointer',
                      border: darkMode ? '2px solid #FFD700' : '2px solid #1E90FF',
                    }}
                  />
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </>
      )}
       
    </Box>
  );
};

export default Gallery;