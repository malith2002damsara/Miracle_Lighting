import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  '/images/Chin1.jpg',
  '/images/Chin2.jpg',
  '/images/Chin3.jpg',
  '/images/Chin4.jpg',
  '/images/Chin5.jpg',
  '/images/Chin6.jpg',
  '/images/Chin7.jpg',
  '/images/Chin8.jpg',
  
];

const ChineseLanterns = ({ darkMode }) => {
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
    >
      <Typography variant="h3" gutterBottom sx={{ mt: 5, mb: 5, color: darkMode ? '#FFD700' : '#000000', textAlign: 'center' }}>
        Chinese Lanterns
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 5, mb: 5, textAlign: 'center' }}>
        Infuse your event with cultural charm and graceful lighting. Ideal for nighttime celebrations, Chinese lanterns offer a soft, ambient glow and can be suspended above dining areas, walkways, or open fields. Available in various colors and sizes to match your theme.
      </Typography>

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
                      alt={`Chinese Lanterns ${globalIndex + 1}`}
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

export default ChineseLanterns;