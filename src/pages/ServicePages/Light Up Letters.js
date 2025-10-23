import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, CardMedia } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  '/images/Lett1.jpg',
 '/images/Lett2.jpg',
 '/images/Lett3.jpg',
 '/images/Lett4.jpg',
 '/images/Lett5.jpg',
 '/images/Lett6.jpg',
 '/images/Lett7.jpg',
 '/images/Lett8.jpg',
];

const LightUpLetters = ({ darkMode }) => {
 
  const [showAllImages] = useState(false);

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

  const imagesToShow = showAllImages ? images : images.slice(0, 5);

  const chunkImages = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const imageRows = chunkImages(imagesToShow, 5);

  return (
    <Container
      sx={{
        py: 8,
        backgroundColor: darkMode ? '#000000' : '#FFFFFF',
        color: darkMode ? '#FFD700' : '#000',
        borderRadius: '8px',
      }}
    ><Typography
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
        Light Up Letters
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
     Make a bold statement with our large light-up letters. Whether it’s “LOVE,” “M & R,” or a custom word, these illuminated pieces add personality and flair to your event. They're perfect for photo ops, entrances, or dance floors and create a modern. </Typography>

      {/* Image Gallery */}
      <Box sx={{ mt: 4 }}>
        {imageRows.map((row, rowIndex) => (
          <Box 
            key={rowIndex}
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 2, 
              mb: 2 
            }}
          >
            {row.map((image, index) => {
              const globalIndex = rowIndex * 4 + index;
              return (
                <Zoom key={globalIndex}>
                  <Box
                    sx={{
                      width: '150px',
                      height: '120px',
                      cursor: 'pointer',
                      border: darkMode ? '2px solid #FFD700' : '2px solid #1E90FF',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Light Up Letters ${globalIndex + 1}`}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </Box>
                </Zoom>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* See More/See Less Button */}
      {/* <Box sx={{ mt: 4, textAlign: 'center' }}>
        {!showAllImages && images.length > 4 ? (
          <Button 
            onClick={handleSeeMore}
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: darkMode ? '#FFD700' : '#FFD700',
              color: 'black',
              '&:hover': {
                backgroundColor: darkMode ? '#4A4A4A' : '#4A4A4A',
                color: '#FFD700',
              },
            }}
          >
            See More
          </Button>
        ) : showAllImages ? (
          <Button 
            onClick={handleSeeLess}
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: darkMode ? '#FFD700' : '#FFD700',
              color: 'black',
              '&:hover': {
                backgroundColor: darkMode ? '#4A4A4A' : '#4A4A4A',
                color: '#FFD700',
              },
            }}
          >
            See Less
          </Button>
        ) : null}
      </Box> */}
    </Container>
  );
};

export default LightUpLetters;