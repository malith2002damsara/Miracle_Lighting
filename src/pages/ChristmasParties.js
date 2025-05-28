import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  '/christmas1.jpg',
  '/christmas2.jpg',
  '/christmas3.jpg',
  '/christmas4.jpg',
  '/christmas5.jpg',
  '/christmas6.jpg',
  '/christmas7.jpg',
  '/christmas8.jpg',
];

const ChristmasParties = ({ darkMode }) => {
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

  const goToGallery = () => {
    navigate('/gallery', { state: { selectedCategory: 'christmas' } });
  };

  const imagesToShow = showAllImages ? images : images.slice(0, 8);

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
        
        marginTop: '20px',
        marginBottom: '20px',
        transition: 'all 0.3s ease-in-out',
        
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
        Christmas Parties
      </Typography>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          mt: 5, 
          mb: 5, 
          textAlign: 'center',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        Create a winter wonderland with our full-service Christmas lighting. Whether indoors or outdoors, we offer themed lighting including Christmas trees, fairy lights, illuminated figures, and synchronized music-light displays. Add festive cheer and turn any venue into a magical holiday escape.
      </Typography>

      <Box sx={{ mt: 4 }}>
        {imageRows.map((row, rowIndex) => (
          <Box 
            key={rowIndex}
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 2, 
              mb: 2,
              '@media (max-width: 600px)': {
                gap: 1,
              },
            }}
          >
            {row.map((image, index) => {
              const globalIndex = rowIndex * 4 + index;
              return (
                <Zoom key={globalIndex}>
                  <Box
                    sx={{
                      width: { xs: '120px', sm: '150px' },
                      height: { xs: '100px', sm: '120px' },
                      cursor: 'pointer',
                      border: darkMode ? '2px solid #FFD700' : '2px solid #1E90FF',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease-in-out',
                      overflow: 'hidden',
                      '&:hover': { 
                        transform: 'scale(1.1)',
                        boxShadow: darkMode ? '0 4px 8px rgba(255, 215, 0, 0.4)' : '0 4px 8px rgba(30, 144, 255, 0.4)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Christmas Party ${globalIndex + 1}`}
                      sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    />
                  </Box>
                </Zoom>
              );
            })}
          </Box>
        ))}
      </Box>

      <Box sx={{ 
        mt: 4, 
        textAlign: 'center',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        gap: 2,
      }}>
        
        <Button
          onClick={goToGallery}
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
          To Gallery
        </Button>
      </Box>
    </Container>
  );
};

export default ChristmasParties;