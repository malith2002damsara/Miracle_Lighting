import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  '/images/Back1.jpg',
  '/images/Back2.jpg',
  '/images/Back3.jpg',
  '/images/Back4.jpg',
  '/images/Back5.jpg',
  '/images/Back6.jpg',
  '/images/Back7.jpg',
  '/images/Back8.jpg',
  
  
];

const BackdropLighting = ({ darkMode }) => {
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
        Backdrop Lighting
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
     Make your backdrop the center of attention with our specialized backdrop lighting services. Ideal for photo booths, stages, or sweetheart tables, we layer light to highlight textures and colors. This adds depth and creates a stunning background for pictures and visual appeal throughout the event. </Typography>

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
                      alt={`Backdrop Lighting ${globalIndex + 1}`}
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

export default BackdropLighting;