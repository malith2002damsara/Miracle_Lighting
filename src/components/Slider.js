import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const slides = [

  { name: 'Canopy string lighting', img: '/images/Cano8.jpg', des: 'Create a magical night sky effect with our canopy string lights. Ideal for weddings, receptions, or night-time events, these lights are woven overhead in artistic patterns. They deliver a romantic ambiance and are perfect for open areas that need warmth and visual depth...!', path: '/Canopy-String-Lights' },
  { name: 'Chandeliers', img: '/images/Chan3.jpg', des: 'Whether you’re going for a vintage, royal, or modern theme, our chandeliers add luxury and sparkle to any venue. Suspended above your dance floor, stage, or dining area, these lights set a classy tone for unforgettable events...!', path: '/Chandeliers' },
  { name: 'Up lighting', img: '/images/Back6.jpg', des: 'Up lighting is perfect for accentuating walls, pillars features. We use lights fixtures that project light upwards, adding depth and color to your event. Customize the color to suit your theme and enjoy a lit space that feels immersive, elegant, and visually striking...!', path: '/Up-lighting' },
  { name: 'Fairy lighting', img: '/images/Fair5.jpg', des: 'Fairy lights are ideal for adding a dreamy and whimsical glow to any setting. Perfect for draping across tables, trees, or ceilings, these delicate lights bring subtle charm. They’re especially popular for weddings, birthdays, and intimate events where ambiance and sparkle go hand in hand...!', path: '/Fairy-Lights' },
  { name: 'Temple decorative lighting', img: '/images/Temp3.jpg', des: 'Honor tradition with our temple lighting services designed for religious events like Kathina,Vesak or poson. We provide respectful, artistic lighting that highlights the beauty of temple architecture. Our service adds serenity, reverence, and grandeur to the occasion, making it both sacred and visually unforgettable...!', path: '/Temple-Decorative-Lighting' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    // Get saved index from sessionStorage if available
    const savedIndex = sessionStorage.getItem('sliderIndex');
    return savedIndex ? parseInt(savedIndex) : 0;
  });
  const navigate = useNavigate();

  // Save current index to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('sliderIndex', currentIndex.toString());
  }, [currentIndex]);

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
            {/* Image with reduced opacity */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 1,
              }}
            />
            <img
              src={slide.img}
              alt={slide.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.7,
              }}
            />

            {/* Content and Buttons */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: { xs: '40%', md: '23%' },
                left: { xs: '5%', sm: '10%', md: '3%' },
                transform: 'translateY(-50%)',
                textAlign: 'left',
                color: '#fff',
                width: { xs: '90%', sm: '80%', md: '50%' },
                zIndex: 2,
              }}

            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#FFD700', // Gold color for heading
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                }}
              >
                {slide.name}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: '#FFF', // White for description
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                  lineHeight: 1.6,
                }}
              >
                {slide.des}
              </Typography>

              {/* Action Buttons */}
              <Box sx={{
                display: 'flex',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'flex-start',
              }}>
                <Button
                  variant="contained"
                  onClick={() => navigate(slide.path)}
                  sx={{
                    backgroundColor: '#FFD700',
                    color: '#4A4A4A',
                    fontWeight: 'bold',
                    px: 3,
                    py: 1,
                    '&:hover': {
                      backgroundColor: '#4A4A4A',
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
                    fontWeight: 'bold',
                    px: 3,
                    py: 1,
                    '&:hover': {
                      backgroundColor: '#4A4A4A',
                      color: '#FFD700',
                    },
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
          zIndex: 3,
        }}
      >
        {/* Navigation Buttons */}
        <Button
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 10,
            zIndex: 3,
            color: '#FFD700',
            '&:hover': { color: '#fff' }
          }}
        >
          {/* ❮ */}
        </Button>
        <Button
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 10,
            zIndex: 3,
            color: '#FFD700',
            '&:hover': { color: '#fff' }
          }}
        >
          {/* ❯ */}
        </Button>
        {slides.map((slide, index) => {
          const isSelected = currentIndex === index;
          return (
            <Box
              key={index}
              onClick={() => handleThumbnailClick(index)}
              sx={{
                cursor: 'pointer',
                border: isSelected ? '3px solid #FFD700' : '2px solid rgba(255,255,255,0.5)',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  borderColor: '#FFD700'
                },
              }}
            >
              <img
                src={slide.img}
                alt={slide.name}
                style={{
                  width: isSelected ? '90px' : '70px',
                  height: '50px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  opacity: isSelected ? 1 : 0.7,
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