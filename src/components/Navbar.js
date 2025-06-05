import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7, Close } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [eventAnchorEl, setEventAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleServicesHover = (event) => setServicesAnchorEl(event.currentTarget);
  const handleEventHover = (event) => setEventAnchorEl(event.currentTarget);
  const handleClose = () => {
    setServicesAnchorEl(null);
    setEventAnchorEl(null);
  };

  const handleServicesClick = () => {
    navigate('/services');
    handleClose();
  };
  
  const handleEventClick = () => {
    navigate('/event');
    handleClose();
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      component={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      sx={{
        bgcolor: darkMode ? '#4A4A4A' : '#FFD700',
        color: darkMode ? '#FFD700' : '#4A4A4A',
      }}
    >
      <Toolbar>
        {/* Logo with animation */}
        <Box 
          sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to="/">
            <motion.img 
              src={Logo} 
              alt="Miracle Lighting Logo" 
              style={{ height: 40, marginRight: 10, marginTop: 7 }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            />
          </Link>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Cursive',
              fontWeight: 'bold',
              color: darkMode ? '#FFD700' : '#4A4A4A',
            }}
          >
            Miracle Lighting
          </Typography>
        </Box>

        {/* Desktop Menu */}
        {!isMobile ? (
          <Box 
            sx={{ display: 'flex', gap: 2 }}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#FFD700',
                    color: '#4A4A4A',
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </Button>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div variants={itemVariants}>
              <Button
                color="inherit"
                aria-controls="services-menu"
                aria-haspopup="true"
                onMouseEnter={handleServicesHover}
                onClick={handleServicesClick}
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#FFD700',
                    color: '#4A4A4A',
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
              </Button>
              <Menu
                id="services-menu"
                anchorEl={servicesAnchorEl}
                open={Boolean(servicesAnchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  onMouseLeave: handleClose,
                  component: motion.div,
                  variants: containerVariants,
                  initial: "hidden",
                  animate: "show"
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    bgcolor: 'transparent',
                    color: '#333',
                    mt: 1.5,
                    backdropFilter: 'blur(6px)',
                    '& .MuiMenuItem-root': {
                      padding: '10px 20px',
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                      color: '#FFD700',
                      marginBottom: '2px',
                      '&:hover': {
                        bgcolor: '#4A4A4A',
                      },
                    },
                  },
                }}
              >
                {[
                  'Indoor Lighting',
                  'Outdoor Lighting',
                  'Backdrop Lighting',
                  'Up-lighting',
                  'Canopy String Lights',
                  'Temple Decorative Lighting',
                  'Pathway Lights',
                  'Light-up Reindeer or Snowman',
                  'Light-Up Letters',
                  'Festoon Lights',
                  'Fairy Lights',
                  'Christmas Tree Lights',
                  'Chinese Lanterns',
                  'Chandeliers'
                ].map((service) => (
                  <MenuItem 
                    key={service} 
                    component={motion(Link)} 
                    to={`/${service.replace(/\s+/g, '-')}`} 
                    onClick={handleClose}
                    variants={menuItemVariants}
                  >
                    {service}
                  </MenuItem>
                ))}
              </Menu>
            </motion.div>

            {/* Event Dropdown */}
            <motion.div variants={itemVariants}>
              <Button
                color="inherit"
                aria-controls="event-menu"
                aria-haspopup="true"
                onClick={handleEventClick}
                onMouseEnter={handleEventHover}
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#FFD700',
                    color: '#333',
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Event
              </Button>
              <Menu
                id="event-menu"
                anchorEl={eventAnchorEl}
                open={Boolean(eventAnchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  onMouseLeave: handleClose,
                  component: motion.div,
                  variants: containerVariants,
                  initial: "hidden",
                  animate: "show"
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    bgcolor: 'transparent',
                    color: '#333',
                    mt: 1.5,
                    backdropFilter: 'blur(6px)',
                    '& .MuiMenuItem-root': {
                      padding: '10px 20px',
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                      color: '#FFD700',
                      marginBottom: '2px',
                      '&:hover': {
                        bgcolor: '#4A4A4A',
                      },
                    },
                  },
                }}
              >
                {['Wedding', 'Birthday Parties', 'Christmas Parties', 'Religious Festivals'].map((event) => (
                  <MenuItem 
                    key={event} 
                    component={motion(Link)} 
                    to={`/${event.toLowerCase().replace(/\s+/g, '-')}`} 
                    onClick={handleClose}
                    variants={menuItemVariants}
                  >
                    {event}
                  </MenuItem>
                ))}
              </Menu>
            </motion.div>

            {['Gallery', 'Contact', 'About Us', ].map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <Button
                  color="inherit"
                  component={Link}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#FFD700',
                      color: '#4A4A4A',
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </Button>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <IconButton 
                color="inherit" 
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </motion.div>
          </Box>
        ) : (
          // Mobile Menu (Hamburger Icon)
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </motion.div>
        )}
      </Toolbar>

      {/* Mobile Drawer with animations */}
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={toggleDrawer}
        PaperProps={{
          elevation: 0,
          sx: {
            bgcolor: 'transparent',
            color: '#333',
            mt: 0,
            backdropFilter: 'blur(2px)',
            '& .MuiMenuItem-root': {
              padding: '10px 20px',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: '#FFFF00',
              marginBottom: '2px',
              '&:hover': {
                bgcolor: '#4A4A4A',
              },
            }
          }
        }}
      >
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Box
            sx={{
              width: 200,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: '#FFFF00',
              height: '66%',
            }}
            role="presentation"
            onClick={toggleDrawer}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton onClick={toggleDrawer}>
                <Close sx={{ color: '#FFFF00' }} />
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
            <List component={motion.div} variants={containerVariants} initial="hidden" animate="show">
              {[
                { text: 'Home', to: './' },
                { text: 'Services', to: './services' },
                { text: 'Event', to: './event' },
                { text: 'Contact', to: './contact' },
                { text: 'Gallery', to: './gallery' },
                { text: 'About Us', to: './about' },
                // { text: 'FAQ', to: './faq' },
              ].map(({ text, to }, index) => (
                <ListItem 
                  key={text} 
                  disablePadding
                  component={motion.div}
                  variants={menuItemVariants}
                  custom={index}
                >
                  <ListItemButton
                    component={Link}
                    to={to}
                    sx={{
                      padding: '7px 20px',
                      color: '#FFFF00',
                      marginBottom: '1px',
                      '&:hover': {
                        bgcolor: '#4A4A4A',
                      },
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider sx={{ my: 1, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
              
              {/* Dark Mode Toggle with Icon */}
              <ListItem 
                disablePadding
                component={motion.div}
                variants={menuItemVariants}
              >
                <ListItemButton 
                  onClick={toggleDarkMode} 
                  sx={{ 
                    padding: '10px 20px',
                    color: '#FFFF00',
                    '&:hover': {
                      bgcolor: '#4A4A4A',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton sx={{ color: '#FFFF00' }}>
                      {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    <ListItemText primary={darkMode ? 'To Light Mode' : 'To Dark Mode'} />
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </motion.div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;