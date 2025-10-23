import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { WhatsApp, EmojiEvents, ElectricBolt, Groups, Schedule } from '@mui/icons-material';
import SEO from '../components/SEO';

const Jobs = ({ darkMode }) => {
  const jobListings = [
    {
      title: "Event Lighting Assistant",
      icon: <EmojiEvents fontSize="large" />,
      description: "Be part of exciting events! Assist with setting up stunning lighting displays for weddings, parties, and corporate events.",
      requirements: [
        "No experience needed - we train you!",
        "Flexible evening/weekend shifts",
        "Physically able to help with setups"
      ],
      perks: ["Free meals during events","Skill development"]
    },
    {
      title: "Electrical Setup Helper",
      icon: <ElectricBolt fontSize="large" />,
      description: "Learn practical electrical skills while helping with lighting installations and equipment setup.",
      requirements: [
        "No experience needed - we train you!",
        "Attention to detail",
        "Willingness to learn",
       
      ],
      perks: ["Free meals during events", "Skill development"]
    },
  ];

  const handleContact = () => {
    const phoneNumber = "+94781277601";
    const message = "Hello! I'm interested in joining your team. Could you share more details about current openings?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <SEO 
        title="Careers | Join Miracle Lighting Team - Job Opportunities"
        description="Join the Miracle Lighting team! Explore career opportunities in event lighting, installation, design, and customer service in Sri Lanka."
        keywords="lighting jobs, event lighting careers, Miracle Lighting jobs, employment opportunities Sri Lanka"
        url="https://miraclelighting.lk/jobs"
      />
      
      <Box
      sx={{
        p: 4,
        background: darkMode 
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' 
          : 'linear-gradient(135deg, #f5f7fa 0%,rgb(240, 222, 119) 100%)',
        color: darkMode ? '#e6f7ff' : '#2d3436',
        minHeight: '100vh',
      }}
    >
      <Typography
             variant="h3"
             gutterBottom
             sx={{
               
               mt: 5,
               mb: 5,
               color: darkMode ? '#FFD700' : '#000000',
               textAlign: 'center',
               fontWeight: 'bold',
               textShadow: darkMode ? '0 2px 4px rgba(255, 215, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
               position: 'relative',
             }}
           >
        Join Our Exciting Team!
      </Typography>
      
      <Typography variant="h5" sx={{ 
        textAlign: 'center', 
        mb: 4,
        color: darkMode ? '#a5b4fc' : '#4b5563'
      }}>
        <Groups sx={{ verticalAlign: 'middle', mr: 1 }} />
        Perfect for students and anyone looking for flexible part-time work!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {jobListings.map((job, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                background: darkMode 
                  ? 'linear-gradient(145deg, #1e293b, #0f172a)' 
                  : 'linear-gradient(145deg, #ffffff, #f8fafc)',
                borderRadius: 4,
                boxShadow: darkMode 
                  ? '0 8px 32px rgba(255, 215, 0, 0.1)' 
                  : '0 8px 32px rgba(30, 144, 255, 0.2)',
                transition: 'all 0.3s ease',
                height: '100%',
                border: darkMode ? '1px solid #FFD700' : '1px solid #e2e8f0',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: darkMode 
                    ? '0 12px 40px rgba(255, 215, 0, 0.2)' 
                    : '0 12px 40px rgba(30, 144, 255, 0.3)',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  color: darkMode ? '#38bdf8' : '#2563eb' // Changed from yellow to sky blue in dark mode
                }}>
                  {job.icon}
                  <Typography
                    variant="h5"
                    sx={{ 
                      ml: 2,
                      fontWeight: 'bold',
                      color: darkMode ? '#f8fafc' : '#1e293b' // White in dark mode, dark in light mode
                    }}
                  >
                    {job.title}
                  </Typography>
                </Box>
                
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: 3,
                    lineHeight: 1.6,
                    color: darkMode ? '#e2e8f0' : '#334155' // Lighter text in dark mode
                  }}
                >
                  {job.description}
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 1,
                    color: darkMode ? '#38bdf8' : '#1e40af' // Sky blue in dark mode
                  }}
                >
                  What We're Looking For:
                </Typography>
                <ul style={{ 
                  paddingLeft: '20px',
                  marginBottom: '20px'
                }}>
                  {job.requirements.map((req, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      <Typography variant="body2" sx={{ color: darkMode ? '#cbd5e1' : '#475569' }}>
                        {req}
                      </Typography>
                    </li>
                  ))}
                </ul>
                
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 1,
                    color: darkMode ? '#4ade80' : '#166534' // Green in dark mode
                  }}
                >
                  What You'll Get:
                </Typography>
                <ul style={{ 
                  paddingLeft: '20px',
                  marginBottom: '20px'
                }}>
                  {job.perks.map((perk, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      <Typography variant="body2" sx={{ color: darkMode ? '#bbf7d0' : '#166534' }}>
                        {perk}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ 
        textAlign: 'center', 
        mt: 6,
        mb: 4,
        p: 4,
        background: darkMode 
          ? 'rgba(15, 23, 42, 0.7)' 
          : 'rgba(248, 250, 252, 0.7)',
        borderRadius: 4,
        border: darkMode ? '1px solid #FFD700' : '1px solid #e2e8f0'
      }}>
        <Schedule sx={{ 
          fontSize: '3rem', 
          mb: 2,
          color: darkMode ? '#38bdf8' : '#2563eb' // Changed from yellow to sky blue
        }} />
        <Typography variant="h5" sx={{ 
          mb: 2,
          color: darkMode ? '#f8fafc' : '#1e293b'
        }}>
          Flexible Scheduling
        </Typography>
        <Typography variant="body1" sx={{ 
          mb: 3, 
          maxWidth: '800px', 
          mx: 'auto',
          color: darkMode ? '#e2e8f0' : '#334155'
        }}>
          We understand you have classes or other commitments. Work when you're available - we'll coordinate schedules to find shifts that work for you!
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsApp />}
          onClick={handleContact}
          sx={{
            background: darkMode 
              ? 'linear-gradient(45deg, #10b981, #059669)' 
              : 'linear-gradient(45deg, #2563eb, #1d4ed8)',
            color: 'white',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: 3,
            fontSize: '1.1rem',
            boxShadow: darkMode 
              ? '0 4px 14px rgba(16, 185, 129, 0.3)' 
              : '0 4px 14px rgba(37, 99, 235, 0.3)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: darkMode 
                ? '0 6px 18px rgba(16, 185, 129, 0.4)' 
                : '0 6px 18px rgba(37, 99, 235, 0.4)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Apply Now via WhatsApp
        </Button>
        <Typography variant="body2" sx={{ 
          mt: 2, 
          opacity: 0.8,
          color: darkMode ? '#94a3b8' : '#64748b'
        }}>
          We typically respond within 2 hours during daytime
        </Typography>
      </Box>
    </Box>
    </>
  );
};

export default Jobs;