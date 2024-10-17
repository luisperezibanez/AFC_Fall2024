
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff5722', // Main color for primary elements
        },
        secondary: {
            main: '#03a9f4', // Main color for secondary elements
        },
        background: {
            default: '#f5f5f5', // Default background color
            paper: '#ffffff',   // Paper background color (e.g., for cards)
        },
        text: {
            primary: '#000000', // Primary text color
            secondary: '#757575', // Secondary text color
        },
    },
});

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
