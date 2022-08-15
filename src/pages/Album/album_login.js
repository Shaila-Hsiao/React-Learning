import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
});

// const theme = createTheme();

export default function LogIn() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeRoundedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }} noWrap>
            首頁
          </Typography>
          {/* <Link to="signin"></Link> */}
          <Button color="inherit" size='large' onClick={() => navigate("/signup")}>Signup</Button>
          <Button color="inherit" size='large' onClick={() => navigate("/signin")}>Login</Button>
        </Toolbar>
      </AppBar>
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
              <Button variant="contained" size="large">新增房間</Button>
              {/* <Button variant="outlined">Secondary action</Button>  */} {/* 第二種按鈕 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <SearchIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                  <TextField variant="standard" fullWidth label="Room Number" id="RoomNum" />
                </Box>
            </Stack>
          </Container>
        </Box>
        {/* Card */}
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
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} />
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
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} />
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
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} />
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
      {/* End footer */}
    </ThemeProvider>
  );
}