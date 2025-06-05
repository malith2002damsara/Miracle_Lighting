import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  '/birthday1.jpg',
  '/birthday2.jpg',
  '/birthday3.jpg',
  '/birthday4.jpg',
  '/birthday5.jpg',
  '/birthday6.jpg',
  '/birthday7.jpg',
  '/birthday8.jpg',
];

const BirthdayParties = ({ darkMode }) => {
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
    navigate('/gallery', { state: { selectedCategory: 'birthday' } });
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
        Birthday Parties
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
       Turn your birthday party into a dazzling celebration with our colorful and exciting lighting setups. Whether it's for kids, teens, or adults, we provide customized lighting themes that match your style and energy. From vibrant LEDs to glowing centerpieces, our lights bring joy and liveliness to your special day. </Typography>

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
                      alt={`Birthday Party ${globalIndex + 1}`}
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

export default BirthdayParties;