import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './imageanimaton.css';

const images = [
  'images/Chan1.jpg',
  'images/Up2.jpg',
  'images/Fair2.jpg',
  'images/Fair19.jpg',
  'images/Chin7.jpg',
];

const content = [
  "Our first service focuses on elegant indoor lighting solutions.",
  "Explore our beautiful outdoor lighting setups for any occasion.",
  "We offer unique, custom lighting designs tailored to your needs.",
  "Dazzling stage lighting for performances and events.",
  "Enchanting backdrop lighting perfect for photo sessions.",
];

// Fixed dimensions for all images
const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 400;

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000, // Changed from 4000 to 3000 for 3-second interval
  fade: true,
};

const ImageAnimation = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentIndex(index);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
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
        backgroundColor: darkMode ? '#121212' : '#f5f5f5'
      }}
    >
      {/* Left Side: Slider */}
      <Box sx={{ 
        width: { xs: '100%', sm: '70%', md: '50%' },
        maxWidth: IMAGE_WIDTH,
        padding: 2
      }}>
        <Slider {...settings} afterChange={handleAfterChange}>
          {images.map((image, index) => (
            <div key={index} className="slick-slide">
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
      <Box sx={{ 
        width: { xs: '100%', sm: '70%', md: '50%' },
        maxWidth: IMAGE_WIDTH,
        textAlign: 'center', 
        mt: { xs: 3, md: 0 },
       
      }}>
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              color: darkMode ? '#FFD700' : '#000000',
              mb: 2,
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '1.5rem' }
            }}
          >
            {content[currentIndex]}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ImageAnimation;