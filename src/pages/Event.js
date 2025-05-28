import React, { useEffect,useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from '../components/ServiceCard'; // Import ServiceCard component





const services = [
  {
    title: 'Wedding Decor',
    description: 'Romantic custom lighting designs',
    image: '/wedding.jpg',
    link: '/wedding',
  },
  {
    title: 'Birthday Parties',
    description: 'Personalized celebration lighting decor',
    image: '/birthday.jpg',
    link: '/birthday-parties',
  },
  {
    title: 'Christmas Parties',
    description: 'Festive themed lighting displays',
    image: '/christmas.jpg',
    link: '/christmas-parties',
  },
  {
    title: 'Kathina Festival',
    description: 'Spiritual respectful lighting solutions',
    image: '/kathina2.jpg',
    link: '/kathina-festival',
  },
];


// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// };

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);


const Event = ({ darkMode }) => {
  return (
    
    <div>  <Box
    sx={{
     py: { xs: 6, sm: 10, md: 15 }, // Adjusts padding for different screen sizes
   px: { xs: 6, sm: 10,md: 15 }, // Reduces side padding on smaller screens
   textAlign: 'center',
   backgroundColor: darkMode ? '#000000' : '#FFFFFF',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   }}
   >
     <Typography
  variant="h3"
  sx={{
    fontSize: { xs: '3rem', sm: '2.2rem', md: '3rem' }, // Adjust font size for different screen sizes
    color: darkMode ? '#FFD700' : '#4A4A4A',
    mt: { xs: 5, sm: -3, md: -4 }, // Reduce top margin on smaller screens
    textAlign: 'center',
    mb: { xs: 6, sm: 6, md: 7 }, // Adjust bottom margin
  }}
>
  Our Main Events
</Typography>
     <Grid container spacing={6} justifyContent="center">
       {services.map((service, index) => (
         <Grid item key={index} xs={12} sm={6} md={3}>
           <Box
             sx={{
               width: '100%',
               maxWidth: '400px',
               height: '100%',
               borderRadius: '25px',
               boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               overflow: 'hidden',
               textAlign: 'center',
               backgroundColor: darkMode ? '#333' : '#FFFFFF', // Darker gray in dark mode, white in light mode
               padding: '20px',
               transition: 'transform 0.3s ease',
               '&:hover': {
                 transform: 'scale(1.05)',
                 backgroundColor: darkMode ? '#333' : '#FFFFFF', // Darker gray on hover in dark mode, light gray in light mode
               },
               color: darkMode ? '#FFF017' : '#000', // Yellow text in dark mode, black text in light mode
             }}
           >
             <ServiceCard {...service} />
           </Box>
         </Grid>
       ))}
     </Grid>
   </Box>
   </div>
     
    
  );
};

export default Event;
