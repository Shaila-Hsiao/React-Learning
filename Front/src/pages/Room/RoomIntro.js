import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import room1 from '../../assets/images/room1.jpg';
import user2 from '../../assets/images/user2.jpg';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';

// const cards = [1, 2, 3, 4];；

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
      default: '#efd9a7',
      paper: '#92bfc0',
    },
  },
});

export default function RoomIntro() {
  // const navigate = useNavigate();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // const handleOpenNotifications = (event) => {
  //   setAnchorElNotifications(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const handleCloseNotifications = () => {
  //   setAnchorElNotifications(null);
  // };

  const [RoomEl, setRoomEl] = React.useState(null);
  // const openRoom = Boolean(RoomEl);
  // const handleRoomClick = (event) => {
  //   setRoomEl(event.currentTarget);
  // };
  // const handleRoomClose = () => {
  //   setRoomEl(null);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavbarDrawer />
      </Box>
        <main>
        {/* Hero unit */}
        <Box
            sx={{
                bgcolor: '#617f7f'
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            bgcolor: '#bca878',
                            padding: 2,
                            height: '100%',
                        }}
                    >
                        <Card 
                            sx={{
                                alignItems: 'end',
                            }}
                            >
                            <CardMedia
                                component="img"
                                height= '350'
                                image={room1}
                                alt="room"
                            />
                        </Card>
                        <Typography variant='h6'>
                            <p>那年夏天...</p>
                            <p>因為專題讓我們相遇，</p>
                            <p>度過多少個夜晚多少個白晝</p>
                            <p>以此屋為念</p>
                        </Typography>
                        <Button variant="contained" size="large">參觀</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                            bgcolor: '#617f7f',
                            padding: 2,
                            height: '100%',
                        }}
                    >
                        <Avatar
                          alt="UserName"
                          sx={{ mx:'auto', width: 150, height: 150 }}
                          src={user2}
                          ></Avatar>
                        <Box sx={{ p:3}} />
                        <Typography variant='h4'>About Author : Lin</Typography>
                        <Box sx={{ p:3}} />
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                padding: 3,
                                borderRadius: '16px'
                            }}
                        >
                            <Typography variant='h6'>米奇妙妙屋</Typography>
                            <Typography variant='h6'>Author : Lin</Typography>
                            <Typography variant='h6'>上次更新時間 : 3 days ago</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </main>
    </ThemeProvider>
  );
}