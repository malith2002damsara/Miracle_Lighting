import React from 'react';
import { Box, Typography, Link, Grid, Button } from '@mui/material';
import { Google,Facebook, Instagram, WhatsApp, Mail, YouTube, Phone } from '@mui/icons-material'; 
import TikTokIcon from '@mui/icons-material/MusicNote'; 
import { FaFacebookMessenger } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  // Define consistent icon size
  const iconSize = 36;

  return (
    <Box
      sx={{
        bgcolor: darkMode ? '#4A4A4A' : '#FFD700',
        color: darkMode ? '#FFD700' : '#4A4A4A',
        py: 4,
        px: 2,
      }}
    >
      {/* First Row: Get Started Links, Our Company, Contact Us */}
      <Grid
        container
        spacing={4}
        sx={{ mb: 4 }}
        justifyContent="space-around"
      >
        {/* Column 1: Get Started Links */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center' }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: darkMode ? '#FFF' : '#4A4A4A' }}
          >
            Get Started
          </Typography>
          <Grid container spacing={8} justifyContent="center">
            <Grid item xs={6}>
              <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>Home</Link>
              <Link href="/event" color="inherit" sx={{ display: 'block', mb: 1 }}>Events</Link>
              
            </Grid>
            <Grid item xs={6}>
              <Link href="/gallery" color="inherit" sx={{ display: 'block', mb: 1 }}>Gallery</Link>
              <Link href="/services" color="inherit" sx={{ display: 'block', mb: 1 }}>Services</Link>
              {/* <Link href="/faq" color="inherit" sx={{ display: 'block', mb: 1 }}>FAQ</Link> */}
              {/* <Link href="/contact" color="inherit" sx={{ display: 'block' }}>Contact Us</Link> */}
            </Grid>
          </Grid>
        </Grid>

        {/* Column 2: Our Company */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center' }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: darkMode ? '#FFF' : '#4A4A4A'}}
          >
            Our Company
          </Typography>
          <Link href="/jobs" color="inherit" sx={{ display: 'block', mb: 1 }}>Jobs</Link>
          <Link href="/about-us" color="inherit" sx={{ display: 'block', mb: 1 }}>About Us</Link>
          <Link href="/contact" color="inherit" sx={{ display: 'block' }}>Contact Us</Link>
        </Grid>

        {/* Column 3: Quick Contact */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center'}}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: darkMode ? '#FFF' : '#4A4A4A' }}
          >
            Quick Contact
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'center' } }}>
            <Button
              href="mailto:miraclelighting9@gmail.com"
              variant="outlined"
              startIcon={<Mail sx={{ fontSize: iconSize - 6 }} />}
              sx={{
                bgcolor: darkMode ? '#555' : '#FFF017',
                color: darkMode ? '#FFFFFF' : '#000',
                borderColor: darkMode ? '#FFF017' : '#000',
                '&:hover': {
                  bgcolor: darkMode ? '#FFF017' : '#999',
                  color: darkMode ? '#000' : '#000',
                  borderColor: darkMode ? '#FFF017' : '#000',
                },
              }}
            >
              Email
            </Button>
            <Button
              href="https://wa.me/+94781277601"
              variant="outlined"
              startIcon={<WhatsApp sx={{ fontSize: iconSize - 6 }} />}
              sx={{
                bgcolor: darkMode ? '#555' : '#FFF017',
                color: darkMode ? '#FFFFFF' : '#000',
                borderColor: darkMode ? '#FFF017' : '#000',
                '&:hover': {
                  bgcolor: darkMode ? '#FFF017' : '#999',
                  color: darkMode ? '#000' : '#000',
                  borderColor: darkMode ? '#FFF017' : '#000',
                },
              }}
            >
              WhatsApp
            </Button>
            <Button
              href="tel:+94781277601"
              variant="outlined"
              startIcon={<Phone sx={{ fontSize: iconSize - 6 }} />}
              sx={{
                bgcolor: darkMode ? '#555' : '#FFF017',
                color: darkMode ? '#FFFFFF' : '#000',
                borderColor: darkMode ? '#FFF017' : '#000',
                '&:hover': {
                  bgcolor: darkMode ? '#FFF017' : '#999',
                  color: darkMode ? '#000' : '#000',
                  borderColor: darkMode ? '#FFF017' : '#000',
                },
              }}
            >
              Call
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Second Row: Social Media Icons */}
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
          mb: 4,
        }}
      >
        {[
          { icon: <Mail sx={{ fontSize: iconSize }} />, link: "mailto:miraclelighting9@gmail.com", label: "Email" },
          { icon: <WhatsApp sx={{ fontSize: iconSize }} />, link: "https://wa.me/+94781277601", label: "WhatsApp" },
          { icon: <Facebook sx={{ fontSize: iconSize }} />, link: "https://www.facebook.com/profile.php?id=100093008904723", label: "Facebook" },
          { icon: <FaFacebookMessenger size={iconSize} />, link: "https://m.me/113787751734562?source=qr_link_share", label: "Messenger" },
          { icon: <Google sx={{ fontSize: iconSize }} />, link: "https://share.google/Qaz8nFQ3rsjlb5kU2", label: "Google Business" },
          { icon: <Instagram sx={{ fontSize: iconSize }} />, link: "https://www.instagram.com/_miracle_lighting?utm_source=qr&igsh=amF0NGc3eGl5aWw1", label: "Instagram" },
          { icon: <YouTube sx={{ fontSize: iconSize }} />, link: "https://youtube.com/@miracle_lighting?si=SSUPc4_OBzGiI3k8", label: "YouTube" },
          { icon: <TikTokIcon sx={{ fontSize: iconSize }} />, link: "https://www.tiktok.com/@miracle_lighting?_t=ZS-8w6OT8FHphg&_r=1", label: "TikTok" }
        ].map((social, index) => (
          <Box key={index} textAlign="center" sx={{ width: 80 }}>
            <Link 
              href={social.link} 
              color="inherit" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{
                '&:hover .icon': {
                  transform: 'scale(1.2)',
                  color: darkMode ? '#FFD700' : '#1E90FF',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                },
              }}
            >
              <Box sx={{ 
                width: iconSize + 10, 
                height: iconSize + 10, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                {React.cloneElement(social.icon, { className: 'icon' })}
              </Box>
            </Link>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              {social.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        At Miracle Lighting, we illuminate your moments with style. Our passion for creativity and quality ensures that every event is a memorable experience.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        For inquiries, please call us at: <Link href="tel:+94781277601">0781277601</Link>, <Link href="tel:+94771178945">0771178945</Link> or email us at: <Link href="mailto:miraclelighting9@gmail.com">miraclelighting9@gmail.com</Link>.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        Follow us on social media for the latest updates and inspiration!
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        © 2024 Miracle Lighting. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;