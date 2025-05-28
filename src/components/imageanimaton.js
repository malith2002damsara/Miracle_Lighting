import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './imageanimaton.css';

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
];

const content = [
  "Our first service focuses on elegant indoor lighting solutions.",
  "Explore our beautiful outdoor lighting setups for any occasion.",
  "We offer unique, custom lighting designs tailored to your needs.",
  "Dazzling stage lighting for performances and events.",
  "Enchanting backdrop lighting perfect for photo sessions.",
  "My name is Malith Damsara, and I have a wedding website.",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
};

const ImageAnimation = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
        alignItems: 'center', 
        justifyContent: 'center', 
        py: { xs: 2, sm: 4 }, 
        px: { xs: 2, sm: 5 } 
      }}
    >
      {/* Left Side: Slider */}
      <Box sx={{ width: { xs: '90%', sm: '70%', md: '50%' } }}>
        <Slider {...settings} afterChange={handleAfterChange}>
          {images.map((image, index) => (
            <div key={index} className="slick-slide">
              <motion.img
                src={image}
                alt={`Slide ${index}`}
                className="animated-image"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: { xs: '250px', sm: '300px', md: '400px' }, 
                  objectFit: 'cover', 
                  borderRadius: '10px' 
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </div>
          ))}
        </Slider>
      </Box>

      {/* Right Side: Content */}
      <Box sx={{ 
        width: { xs: '90%', sm: '70%', md: '50%' }, 
        textAlign: 'center', 
        mt: { xs: 3, md: 0 } 
      }}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Typography 
            variant="h5" 
            sx={{ color: darkMode ? '#FFD700' : '#000000', px: { xs: 1, sm: 2 } }}
          >
            {content[currentIndex]}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ImageAnimation;
