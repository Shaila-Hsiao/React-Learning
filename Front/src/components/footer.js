import React ,{useEffect,useState} from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import FeedIcon from '@mui/icons-material/Feed';
import { Button } from '@mui/material';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

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
            </Link>
            {' 畢業專題第五組'}{new Date().getFullYear()}{'.'}
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
            <Box align='center'>
                <Button startIcon={<HowToVoteIcon fontSize="large" color='secondary' />}>
                    <Typography variant="h6" color="#FFFFFF" align="center" gutterBottom>
                        <Link color="#FFFFFF"
                        href="">最佳影片獎</Link>、
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                        <Link color="#FFFFFF"
                        href="">最佳海報獎</Link>
                    </Typography>
                </Button>
                <Button variant="outlined" startIcon={<FeedIcon fontSize="large" color='secondary' />}>
                    <Typography variant="h6" align="center" gutterBottom>
                        <Link color="#FFFFFF"
                        href="https://forms.gle/FS75GVcXpeW2tAnS7">意見反饋</Link>
                    </Typography>
                </Button>
            </Box>
            <Divider color='#FFFFFF' />
            <Copyright />
        </Box>
    </ThemeProvider>
  )
}