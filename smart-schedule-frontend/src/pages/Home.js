// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <>
            <Hero />
            <Container sx={{ py: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" gutterBottom>
                        About Smart Schedule Tool
                    </Typography>
                    <Typography variant="body1">
                        Our application helps you manage your courses, schedules, and notifications in a simple and intuitive way.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Home;
