import React ,{useEffect,useState} from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#182e2e',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#7f0808',
            paper: '#94bfbf',
        },
    },
});

function Copyright() {
    return (
        <Typography color='#FFFFFF' variant="body2" align="center">
            {'Copyright © '}
            <Link color="#FFFFFF" href="https://www.im.ncnu.edu.tw/">
                國立暨南國際大學資訊管理學系
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
            <Typography variant="h6" color='#FFFFFF' align="center" gutterBottom>
                國立暨南國際大學資訊管理學系 第五組
            </Typography>
            <Typography variant="h6" color='#FFFFFF' align="center" gutterBottom>
                National Chi Nan University Department of Information Management
            </Typography>
            <Typography variant="h6" color='#FFFFFF' align="center" gutterBottom>
                <Link color="#FFFFFF"
                href="https://forms.gle/FS75GVcXpeW2tAnS7">意見反饋</Link></Typography>
            <hr />
            <Copyright />
        </Box>
    </ThemeProvider>
  )
}