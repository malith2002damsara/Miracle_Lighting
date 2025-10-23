
import { Box, Typography, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import CallIcon from '@mui/icons-material/Call';
import { FaFacebookMessenger } from 'react-icons/fa';
import React, { useEffect } from 'react';
import SEO from '../components/SEO'; // Import SEO Component

//cgfchggvg
const ContactUs = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO Meta Tags for Contact Page */}
      <SEO 
        title="Contact Us | Miracle Lighting - Get in Touch for Event Lighting"
        description="Contact Miracle Lighting for all your event and wedding lighting needs. Call us at 078 127-7601 or email miraclelighting9@gmail.com. Professional service across Sri Lanka."
        keywords="contact, lighting services, event planning, wedding lighting, Sri Lanka, Miracle Lighting contact"
        url="https://miraclelighting.lk/contact"
      />

      <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("./images/Contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: darkMode ? '#FFD700' : '#FFD700',
        padding: 2,
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: '80%', width: '100%', zIndex: 1 }}>
        <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      mt: 5,
                      mb: 5,
                      color: darkMode ? '#FFD700' : '#FFD700',
                      textAlign: 'center',
                      fontWeight: 'bold',
                     
                      position: 'relative',
                    
                    }}
                  >
          Get in Touch for Your Dream Lighting!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: darkMode ? '#FFD700' : '#FFD700',
            textAlign: 'center',
            mb: 4,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          }}
        >
          Let's illuminate your special day with best lighting solutions.
        </Typography>

        <Box
  sx={{
    mt: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <Typography
    variant="h6"
    sx={{
      color: darkMode ? '#FFD700' : '#FFD700',
      fontWeight: 'bold',
      mb: 2,
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
      textAlign: 'center',
    }}
  >
    Contact Information:
  </Typography>

  {/* Email */}
  <Typography
    sx={{
      color: darkMode ? '#FFD700' : '#FFD700',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <EmailIcon />
    miraclelighting9@gmail.com
  </Typography>

  {/* Phone */}
  <Typography
    sx={{
      color: darkMode ? '#FFD700' : '#FFD700',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <PhoneIcon />
    (078) 127-7601  / (077) 117-8945

  </Typography>

  {/* WhatsApp */}
  <Typography
    sx={{
      color:darkMode ? '#FFD700' : '#FFD700',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <WhatsAppIcon />
    Message us on WhatsApp
  </Typography>

  {/* Facebook Messenger */}
  <Typography
    sx={{
      color:darkMode ? '#FFD700' : '#FFD700',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <FaFacebookMessenger />
    Chat with us on Facebook Messenger
  </Typography>
</Box>


        <Box
  sx={{
    display: 'flex',
    gap: 2,
    mt: 4,
    flexWrap: 'wrap',
    justifyContent: 'center',
    zIndex: 2,
  }}
>
  {/* Email Button */}
  <Button
    variant="outlined"
    startIcon={<EmailIcon />}
    onClick={() => (window.location.href = 'mailto:miraclelighting9@gmail.com')}
    sx={{
      color: darkMode ? '#FFD700' : '#FFD700',
      borderColor: darkMode ? '#FFD700' : '#FFD700',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#FFD700',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    Email
  </Button>

  {/* WhatsApp Button */}
  <Button
    variant="outlined"
    startIcon={<WhatsAppIcon />}
    onClick={() => window.open('https://wa.me/+94781277601', '_blank')}
    sx={{
      color: darkMode ? '#FFD700' : '#FFD700',
      borderColor: darkMode ? '#FFD700' : '#FFD700',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#FFD700',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    WhatsApp
  </Button>

  {/* Facebook Button */}
  <Button
    variant="outlined"
    startIcon={<FaFacebookMessenger />}
    onClick={() => window.open('https://m.me/113787751734562?source=qr_link_share', '_blank')}
    sx={{
      color: darkMode ? '#FFD700' : '#FFD700',
      borderColor: darkMode ? '#FFD700' : '#FFD700',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#FFD700',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    Messenger
  </Button>

  {/* Call Button */}
  <Button
    variant="outlined"
    startIcon={<CallIcon />}
    onClick={() => (window.location.href = 'tel:+94771178945')}
    sx={{
      color: darkMode ? '#FFD700' : '#FFD700',
      borderColor: darkMode ? '#FFD700' : '#FFD700',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#FFD700',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    Call
  </Button>
</Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
