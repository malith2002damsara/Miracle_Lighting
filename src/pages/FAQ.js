import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, Container, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SEO from '../components/SEO';

// Define animations
const fadeInAnimation = {
  animation: 'fadeIn 0.5s ease-in-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
};

const FAQ = ({ darkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const questionRefs = useRef([]);

  const faqs = [
    {
      question: "What types of events do you cover?",
      answer: "We cover a wide range of events including weddings, corporate events, festivals, and private parties. Our team specializes in creating custom lighting designs for each unique occasion."
    },
    {
      question: "How do I request a quote?",
      answer: "You can request a quote by contacting us through our website's contact form, emailing us directly at info@example.com, or calling our office at (123) 456-7890. We typically respond within 24 hours."
    },
    {
      question: "Do you offer on-site consultations?",
      answer: "Yes, we offer complimentary on-site consultations to understand your event's requirements and provide personalized recommendations. This allows us to assess the venue and create the perfect lighting plan."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand plans can change. Cancellations made more than 30 days before the event receive a full refund. Between 15-30 days, we refund 50%. Less than 15 days notice is non-refundable."
    },
    {
      question: "Do you provide lighting for outdoor events?",
      answer: "Absolutely! We have weather-resistant equipment specifically designed for outdoor use. We can create beautiful ambient lighting for gardens, tents, patios, and other outdoor spaces."
    }
  ];

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleQuestion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      // Scroll to the question when expanded
      setTimeout(() => {
        questionRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }, 100); // Small delay to allow for collapse animation
    }
  };

  return (
    <>
      <SEO 
        title="FAQ | Miracle Lighting - Common Questions About Event Lighting"
        description="Find answers to frequently asked questions about our decorative lighting services, pricing, installation, and booking process."
        keywords="lighting FAQ, event lighting questions, wedding lighting help, Miracle Lighting information"
        url="https://miraclelighting.lk/FAQ"
      />
      
      <Container
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'relative',
        backgroundImage: ' url("/faq.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        px: { xs: 2, md: 4 },
        py: 8,
        color: '#FFD700',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        sx={{
           color: darkMode ? '#FFD700' : '#FFD700', mb: 9, mt: 5 ,fontSize: { xs: '2.7rem', sm: '2.2rem', md: '3rem' }
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: '900px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {faqs.map((faq, index) => (
          <Box
            key={index}
            ref={el => questionRefs.current[index] = el}
            sx={{
              
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              
              ...fadeInAnimation,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <Box
              onClick={() => toggleQuestion(index)}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 3,
                cursor: 'pointer',
                backgroundColor: expandedIndex === index ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                },
              }}
            >
              <Typography variant="h5" sx={{ 
               
                textAlign: 'left',
                flexGrow: 1,
                color: '#FFD700'
              }}>
                {faq.question}
              </Typography>
              <IconButton
                size="small"
                sx={{ color: '#FFD700' }}
              >
                {expandedIndex === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </Box>
            
            <Collapse in={expandedIndex === index}>
              <Box sx={{ 
                p: 3,
                pt: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                textAlign: 'left',
                borderTop: '1px solid rgba(255, 215, 0, 0.2)'
              }}>
                <Typography variant="body1" sx={{ 
                  color: '#FFD700',
                  lineHeight: 1.6
                }}>
                  {faq.answer}
                </Typography>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>

     
    </Container>
    </>
  );
};

export default FAQ;