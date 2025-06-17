import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  '/images/Cano1.jpg',
  '/images/Cano2.jpg',
  '/images/Cano3.jpg',
  '/images/Cano4.jpg',
  '/images/Cano5.jpg',
  '/images/Cano6.jpg',
  '/images/Cano7.jpg',
  '/images/Cano8.jpg',
];

const CanopyStringLights = ({ darkMode }) => {
  const navigate = useNavigate();
  const [showAllImages, setShowAllImages] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSeeMore = () => {
    setShowAllImages(true);
  };

  const handleSeeLess = () => {
    setShowAllImages(false);
  };

  // Display first 5 images initially, or all images if showAllImages is true
  const imagesToShow = showAllImages ? images : images.slice(0, 4);

  // Function to chunk images into rows of 5
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
    >
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
        Canopy String Lights
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
      Create a magical night sky effect with our canopy string lights. Ideal for weddings, receptions, or night-time events, these lights are woven overhead in artistic patterns. They deliver a romantic ambiance and are perfect for open areas that need warmth and visual depth.  </Typography>

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
              const globalIndex = rowIndex * 5 + index;
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
                      alt={`Canopy String Lights ${globalIndex + 1}`}
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
        {!showAllImages && images.length > 5 ? (
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

export default CanopyStringLights;