import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './imageanimaton.css';

const images = [
  'images/Indo6.jpg',
  'images/Outd2.jpg',
  'images/Back8.jpg',
  'images/Fest6.jpg',
  'images/Chin4.jpg',
];

const content = [
  "Transform any indoor space into a bright setting with our bespoke indoor lighting solutions. Whether it's a wedding, corporate event, or family gathering, we offer a variety of styles to match your theme and enhance the mood.From soft, warm tones to dynamic color effects, our lighting adds sophistication and charm",
  "Illuminate your garden or event venue with stunning outdoor lighting that creates a captivating atmosphere. Our lighting designs are ideal for weddings, festivals, or night-time celebrations. With carefully placed lights, we ensure safety and style, making your event",
  "Make your backdrop the center of attention with our specialized backdrop lighting services. Ideal for photo booths, stages, or sweetheart tables, we layer light to highlight textures and colors. This adds depth and creates a stunning background for pictures and visual appeal throughout the event",
  "Festoon lights offer a timeless, romantic look perfect for weddings, garden parties, and open-air events. Strung overhead or along structures, they create a canopy of soft bulbs that give off a cozy, inviting vibe. Durable and stylish, they bring a warm atmosphere to any celebration",
  "Bring a touch of tradition and elegance to your celebration with Chinese lanterns. Available in various colors these lanterns float beautifully or hang gracefully, creating a warm and cultural ambiance. They're ideal for festivals, weddings, or themed parties seeking something unique and symbolic",
];

// Fixed dimensions for all images
const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 320;

const ImageAnimation = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction] = useState(0); // 0 for forward, 1 for backward

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    beforeChange: (current, next) => setCurrentIndex(next),
  };
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction === 0 ? 20 : -20
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction === 0 ? -20 : 20,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    })
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center', 
        justifyContent: 'center', 
        py: { xs: 2, sm: 4 }, 
        px: { xs: 2, sm: 5 },
        backgroundColor: darkMode ? '#121212' : '#f5f5f5',
        gap: { xs: '5px', md: '2px' }
      }}
    >
      {/* Left Side: Slider */}
      <Box sx={{ 
        width: { xs: '100%', sm: '70%', md: '50%' },
        maxWidth: IMAGE_WIDTH,
        padding: { xs: '5px', md: 2 }
      }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                style={{
                  width: '100%',
                  height: IMAGE_HEIGHT,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  boxShadow: darkMode 
                    ? '0 4px 20px rgba(255, 215, 0, 0.2)' 
                    : '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </Box>

      {/* Right Side: Content */}
      <Box
        sx={{
          width: { xs: '100%', sm: '70%', md: '50%' },
          maxWidth: IMAGE_WIDTH,
          textAlign: 'center',
          padding: { xs: '5px', md: 2 },
          minHeight: IMAGE_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AnimatePresence custom={direction} mode='wait'>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Typography
              variant="h5"
              sx={{
                color: darkMode ? '#FFD700' : '#000000',
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '1.3rem', sm: '1.7rem' },
               fontFamily: `'Poppins', sans-serif` // Modern, clean, and user-friendly

              }}
            >
              {content[currentIndex]}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default ImageAnimation;