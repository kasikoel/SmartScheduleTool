// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // vibrant blue
        },
        secondary: {
            main: '#ff4081', // bright pink
        },
        background: {
            default: '#f5f5f5', // light gray background for the overall page
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            color: '#333',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            color: '#333',
        },
        body1: {
            fontSize: '1rem',
            color: '#555',
        },
    },
});

export default theme;
