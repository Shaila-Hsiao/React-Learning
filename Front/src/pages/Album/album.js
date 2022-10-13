import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import room1 from '../../assets/images/room1.jpg'; // 圖片的位置
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';
import httpClient from '../../httpClient';
const cards = [1, 2, 3, 4];

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
      paper: '#efd9a7',
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "lightblue"
    }
  }
});

function Album() {
  const navigate = useNavigate();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);

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
  const CreateRoom = async (event) => {
    event.preventDefault();
    try {
      const resp = await httpClient.get("//localhost:5000/@me", {
        
      });
      console.log(resp)
      // if login success
      navigate("/createRoom");
      // window.location.href = "//localhost:5000/createRoom";
    } catch (error) {
      if (error.response.status === 401) {
        alert("請先登入!");

      }
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarDrawer/>
      
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 3,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            紀念館
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            歡迎來到紀念館，開始佈置你的回憶小屋～
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" size="large" onClick={CreateRoom}>新增房間</Button>
            {/* <Button variant="outlined">Secondary action</Button>  */} {/* 第二種按鈕 */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                <TextField variant="standard" fullWidth label="Room Number" id="RoomNum" />
              </Box>
          </Stack>
        </Container>
      </Box>
      {/* Card */}
      <Container sx={{ py: 8 }}>
        {/* End hero unit  */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardActionArea onClick={() => navigate("/intro")}>
                  <CardMedia
                    component="img"
                    image={room1}
                    alt="random"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 3 }} />
      <Container sx={{ py: 8 }}>
        {/* End hero unit  */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardActionArea onClick={() => navigate("/intro")}>
                <CardMedia
                  component="img"
                  image={room1}
                  alt="random"
                />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 3 }} />
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit  */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    房間名稱
                  </Typography>
                  <Typography>
                    空間佈置說明
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">參觀</Button>
                  {/* <Button size="small">Edit</Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 3 }} />
    </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
        <Typography variant="h6" color='#FFFFFF' align="center" gutterBottom>
          Footer
        </Typography>
        {/* <Typography
          variant="subtitle1"
          align="center"
          color='#FFFFFF'
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        {/* <Copyright /> */}
      </Box>
    </ThemeProvider>
  );
}
export default Album;