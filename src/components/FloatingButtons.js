import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import { FaFacebookMessenger } from 'react-icons/fa';// You might want to replace with react-icons for an actual Messenger logo

const FloatingButtons = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll-to-Top Button */}
      {showScroll && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: '#FFF017',
            color: 'black',
            '&:hover': { backgroundColor: '#FFF017' },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}

      {/* Floating Chat and Call Buttons */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {/* Show ChatIcon only when chat options are hidden */}
        {!showChatOptions && (
          <IconButton
            onClick={() => setShowChatOptions(true)}
            sx={{
              backgroundColor: '#FFF017',
              '&:hover': { backgroundColor: '#FFF017' },
            }}
          >
            <ChatIcon sx={{ color: '#000' }} />
          </IconButton>
        )}

        {/* Messenger and WhatsApp options */}
        {showChatOptions && (
          <>
            <IconButton
  onClick={() => window.open('https://m.me/113787751734562?source=qr_link_share', '_blank')}
  sx={{
    backgroundColor: '#FFF017',
    '&:hover': { backgroundColor: '#FFF017' },
  }}
>
  <FaFacebookMessenger style={{ color: '#000', fontSize: 24 }} />
</IconButton>


            <IconButton
              onClick={() => window.open('https://wa.me/+94781277601', '_blank')}
              sx={{
                backgroundColor: '#FFF017',
                '&:hover': { backgroundColor: '#FFF017' },
              }}
            >
              <WhatsAppIcon sx={{ color: '#000',fontSize: 24 }} />
            </IconButton>
          </>
        )}

        {/* Call Icon - always visible */}
        <IconButton
          onClick={() => (window.location.href = 'tel:+94771178945')}
          sx={{
            backgroundColor: '#FFF017',
            '&:hover': { backgroundColor: '#FFF017' },
          }}
        >
          <CallIcon sx={{ color: '#000',fontSize: 24 }} />
        </IconButton>
      </Box>
    </>
  );
};

export default FloatingButtons;
