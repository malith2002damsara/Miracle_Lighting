import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Gallery = ({ darkMode }) => {
  const location = useLocation();
  const categories = {
    wedding: [

      '/images/Back3.jpg', '/images/Fair5.jpg', '/images/Indo2.jpg',
      '/images/Back1.jpg', '/images/Outd4.jpg', '/images/Chan7.jpg',
      '/images/Fest1.jpg', '/images/Path2.jpg', '/images/Outd3.jpg',
      '/images/Fair2.jpg', '/images/Indo7.jpg', '/images/Chan4.jpg',
      '/images/Outd1.jpg', '/images/Lett3.jpg', '/images/Chin5.jpg',
      '/images/Back2.jpg', '/images/Fair4.jpg', '/images/Fest8.jpg',
      '/images/Indo5.jpg', '/images/Chan1.jpg', '/images/Indo4.jpg',
      '/images/Fest3.jpg', '/images/Back8.jpg', '/images/Back6.jpg',
      '/images/Back7.jpg', '/images/Chin8.jpg', '/images/Lett5.jpg',
      '/images/Chan2.jpg', '/images/Back4.jpg', '/images/Outd6.jpg',
      '/images/Chin3.jpg', '/images/Fest6.jpg', '/images/Cano2.jpg',
      '/images/Fair7.jpg', '/images/Indo1.jpg', '/images/Chan5.jpg',
      '/images/Chin2.jpg', '/images/Fest4.jpg', '/images/Path1.jpg',
      '/images/Fair3.jpg', '/images/Indo8.jpg', '/images/Outd7.jpg',
      '/images/Outd2.jpg', '/images/Lett1.jpg', '/images/Chin7.jpg',
      '/images/Cano4.jpg', '/images/Fair8.jpg', '/images/Indo3.jpg',
      '/images/Chan8.jpg', '/images/Outd5.jpg', '/images/Lett4.jpg',
      '/images/Fest2.jpg', '/images/Cano1.jpg', '/images/Fair6.jpg',
      '/images/Indo6.jpg', '/images/Chan3.jpg', '/images/Chin4.jpg',
      '/images/Fest7.jpg', '/images/Cano5.jpg', '/images/Outd8.jpg',
      '/images/Chin1.jpg', '/images/Fest5.jpg', '/images/Chan6.jpg',



    ],


    Religious: [

      '/images/Reli10.jpg', '/images/Temp2.jpg', '/images/Cano6.jpg', '/images/Reli19.jpg',
      '/images/Fair1.jpg', '/images/Path3.jpg', '/images/Outd10.jpg', '/images/Reli13.jpg',
      '/images/Temp3.jpg', '/images/Reli12.jpg', '/images/Cano15.jpg', '/images/Reli1.jpg',
      '/images/Path4.jpg', '/images/Reli5.jpg', '/images/Fair23.jpg', '/images/Reli8.jpg',
      '/images/Temp1.jpg', '/images/Reli16.jpg', '/images/Cano3.jpg', '/images/Reli7.jpg',
      '/images/Reli20.jpg', '/images/Reli6.jpg', '/images/Reli14.jpg', '/images/Cano7.jpg',
      '/images/Reli2.jpg', '/images/Reli17.jpg', '/images/Reli4.jpg', '/images/Reli18.jpg',
      '/images/Reli11.jpg',

    ],


    // birthday: ['/images/Fair1.jpg', '/birthday2.jpg', '/birthday3.jpg'],
    // christmas: ['/christmas1.jpg', '/christmas2.jpg', '/christmas3.jpg']
  };

  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.selectedCategory || null
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleReset = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  return (
    <>
      <SEO 
        title="Gallery | Miracle Lighting - View Our Stunning Light Decorations"
        description="Browse our gallery of beautiful lighting decorations for weddings, Kathina festivals, Christmas parties, and birthday celebrations across Sri Lanka."
        keywords="lighting gallery, wedding decoration photos, event lighting pictures, decorative lights Sri Lanka, miracle lighting portfolio"
        url="https://miraclelighting.lk/gallery"
      />
      
      <Box sx={{ py: 10, px: { xs: 2, sm: 4 }, position: 'relative' }}>
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
        Gallery
      </Typography>

      {!selectedCategory ? (
        <Grid container spacing={4} justifyContent="center">
          {Object.keys(categories).map((category) => (
            <Grid item key={category} xs={6} sm={6} md={3}>
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
                  height="240"
                  image={categories[category][0]} // Show only the first image
                  alt={`Category ${category}`}
                  sx={{
                    filter: 'brightness(1.0) grayscale(30%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    '&:hover': {
                      filter: 'brightness(1) grayscale(0%)',
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
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
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
              <Grid item key={index} xs={6} sm={6} md={3}>
                <Zoom>
                  <Box
                    component="img"
                    src={image}
                    alt={`${selectedCategory} event ${index}`}
                    sx={{
                      width: '100%',
                      height: { xs: '200px', sm: '250px', md: '300px' },
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
    </>
  );
};

export default Gallery;