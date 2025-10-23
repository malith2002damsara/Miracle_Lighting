import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, CardMedia } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  '/images/Deer1.jpg',
  '/images/Deer2.jpg',
  '/images/Deer3.jpg',
  '/images/Deer4.jpg',
  '/images/Deer5.jpg',
  '/images/Deer6.jpg',
  '/images/Deer7.jpg',
  '/images/Deer8.jpg',
];

const LightUpReindeerOrSnowman = ({ darkMode }) => {
 
  const [showAllImages, setShowAllImages] = useState(false);

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSeeMore = () => {
    setShowAllImages(true);
  };

  const handleSeeLess = () => {
    setShowAllImages(false);
  };

  const imagesToShow = showAllImages ? images : images.slice(0, 4);

  const chunkImages = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const imageRows = chunkImages(imagesToShow, 4);

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
        Light-up Reindeer or Snowman
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
     Bring joy to your  Christmascelebrations with illuminated reindeer and snowman decorations. These eye-catching features are perfect for Christmas parties, outdoor displays, or themed events.Built for both day and night impact, they add  charm and attract all ages with their glowing presence. </Typography>

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
                      alt={`Light-up Reindeer or Snowman ${globalIndex + 1}`}
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
      <Box sx={{ mt: 4, textAlign: 'center' }}>
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
      </Box>
    </Container>
  );
};

export default LightUpReindeerOrSnowman;