import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
};

const Hero = ({ darkMode }) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        padding: { xs: 2, sm: 4 },
        overflow: 'hidden',
        backgroundImage: 'url(/images/Hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: { xs: '10vh', sm: '15vh' },
      }}
    >
      {/* Background overlay animation */}
      <motion.div
        variants={backgroundVariants}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
      />

      {/* Text Container */}
      <Box
        component={motion.div}
        variants={containerVariants}
        sx={{ width: '80%', maxWidth: '800px', zIndex: 1 }}
      >
        <motion.div variants={textVariants}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: '#FFD700',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              textShadow: '4px 4px 4px #4A4A4A',
              fontWeight: 'bold'
            }}
          >
            Light up your special day with Miracle Lighting
          </Typography>
        </motion.div>

        <motion.div variants={textVariants}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: '#FFD700',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              pt: 5,
              fontWeight: 'medium'
            }}
          >
            Stunning lighting designs for your dream wedding
          </Typography>
        </motion.div>
      </Box>

      {/* Button Container */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1
        }}
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FFD700',
              color: '#4A4A4A',
              fontSize: { xs: '0.8rem', sm: '1rem' },
              mt: 6,
              padding: { xs: '8px 16px', sm: '10px 20px' },
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#4A4A4A',
                color: '#FFD700',
              },
            }}
            component={Link}
            to="/services"
          >
            Explore Our Services
          </Button>
        </motion.div>
      </Box>

      {/* Optional floating decorative elements */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#FFD700',
          fontSize: '1.5rem'
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
  
      </motion.div>
    </Box>
  );
};

export default Hero;