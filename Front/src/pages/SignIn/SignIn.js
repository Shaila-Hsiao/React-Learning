import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import httpClient from '../../httpClient';
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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
      default: '#bca878',
      paper: '#7f0808',
      
    },
  },
});
// const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password =  data.get('password');
    console.log({
     email,password
    });
    // Post 給後端檢查
    try {
      const resp = await httpClient.post("//localhost:5000/login", {
        email,
        password,
      });
      console.log(resp)
      // if login success
      window.location.href = "/";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }


  };
  
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative" bgcolor='#182e2e'>
        <Toolbar>
          <Button color="inherit" startIcon={<ArrowBackIcon />} size='large' onClick={() => navigate("/")}>Back</Button>
        </Toolbar>
      </AppBar>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#efd9a7',
            padding: '50px',
            color: '#fff',
            
          }}
        >
           <Avatar sx={{ m: 1, bgcolor: 'background.paper', color: '#efd9a7' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登入
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="信箱"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="密碼"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="記住我"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'background.paper', color: '#fff' }}
              size='large'
            >
              登入
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  忘記密碼？
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {"還沒有帳戶？註冊"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}