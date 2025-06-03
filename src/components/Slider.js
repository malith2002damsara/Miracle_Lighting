import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const slides = [
  { name: 'Wedding 1', img: '/images/Chan3.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/indoor-lighting' },
  { name: 'Wedding 2', img: '/images/Back6.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/outdoor-lighting' },
  { name: 'Wedding 3', img: '/images/Cano8.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/custom-designs' },
  { name: 'Wedding 4', img: '/images/Fair13.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/stage-lighting' },
  { name: 'Wedding 5', img: '/images/Temp2.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/backdrop-lighting' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      className="carousel"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: '70vh', sm: '85vh' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Navigation Buttons
      <Button
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: { xs: '5%', sm: '200px' },
          top: { xs: '90%', sm: '50%' },
          transform: { xs: 'translateY(-50%)', sm: 'none' },
          zIndex: 10,
          borderRadius: '50%',
          minWidth: '40px',
          height: '40px',
          backgroundColor: '#FFF017',
          color: 'black',
          '&:hover': { backgroundColor: '#134df3' },
        }}
        variant="contained"
      >
        &lt;
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: { xs: '5%', sm: '200px' },
          top: { xs: '90%', sm: '50%' },
          transform: { xs: 'translateY(-50%)', sm: 'none' },
          zIndex: 10,
          borderRadius: '50%',
          minWidth: '40px',
          height: '40px',
          backgroundColor: '#FFF017',
          color: 'black',
          '&:hover': { backgroundColor: '#134df3' },
        }}
        variant="contained"
      >
        &gt;
      </Button> */}

      {/* Carousel Wrapper with Smooth Fade Animation */}
      <Box
        className="slider-wrapper"
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          transition: 'transform 1.5s ease, opacity 1s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            className="slide"
            sx={{
              minWidth: '100%',
              height: '100%',
              position: 'relative',
              opacity: currentIndex === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={slide.img}
              alt={slide.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Content and Buttons */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: { xs: '5%', sm: '10%' },
                left: { xs: '5%', sm: '10%' },
                textAlign: 'left',
                color: '#fff',
                width: { xs: '90%', sm: 'auto' },
              }}
            >
              <Typography 
  variant="h6" 
  sx={{ 
    fontWeight: 'bold', 
    mb: 1, 
    fontSize: { xs: '1rem', md: '1.25rem' } // Small on phones, medium on desktop
  }}
>
  {slide.name}
</Typography>

<Typography 
  variant="subtitle1" 
  sx={{ 
    mb: 2, 
    fontSize: { xs: '0.875rem', md: '1rem' } // Smaller on phones, normal on desktop
  }}
>
  {slide.des}
</Typography>

<Typography 
  variant="subtitle1" 
  sx={{ 
    mb: 2, 
    fontSize: { xs: '0.875rem', md: '1rem' } // Same as above
  }}
>
  {slide.topic}
</Typography>


              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                <Button
                  variant="contained"
                  onClick={() => navigate(slide.path)}
                  sx={{
                    backgroundColor: '#FFD700',
                    color: '#4A4A4A',
                    '&:hover': {
      bgcolor: '#4A4A4A', 
      color: '#FFD700',
    },
                  }}
                >
                  Details
                </Button>
                <Button
                  variant="contained"
                  onClick={() => navigate('/gallery')}
                  sx={{
                    backgroundColor: '#FFD700',
                    color: '#4A4A4A',
                    '&:hover': {
      bgcolor: '#4A4A4A', 
      color: '#FFD700',},
                  }}
                >
                  To Gallery
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Thumbnails */}
      <Box
  className="thumbnail-container"
  sx={{
    position: 'absolute',
    bottom: { xs: '3%', sm: '5%' },
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: { xs: 'wrap', md: 'nowrap' },
    gap: '8px',
    overflowX: { xs: 'visible', md: 'auto' },
    padding: '3px',
    paddingTop: '10px',
    width: { xs: '100%', md: 'auto' },
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  {slides.map((slide, index) => {
    const isSelected = currentIndex === index;
    return (
      <Box
        key={index}
        onClick={() => handleThumbnailClick(index)}
        sx={{
          cursor: 'pointer',
          border: isSelected ? '3px solid yellow' : '2px solid gray',
          borderRadius: '6px',
          transition: 'transform 0.5s ease',
          '&:hover': { transform: 'scale(1.1)' },
        }}
      >
        <img
          src={slide.img}
          alt={slide.name}
          style={{
            width: isSelected ? '90px' : '70px',
            height: 'auto',
            borderRadius: '6px',
          }}
        />
      </Box>
    );
  })}
</Box>

</Box>

  );
};

export default Slider;
