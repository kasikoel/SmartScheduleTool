// src/components/Hero.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
    return (
        <Box
            sx={{
                height: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(https://source.unsplash.com/random/1600x900?education)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                p: 2,
            }}
        >
            <Typography variant="h1" component="h1" sx={{ mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                Welcome to Smart Schedule Tool
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
                Manage your courses and schedules effortlessly.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
                Get Started
            </Button>
        </Box>
    );
};

export default Hero;
