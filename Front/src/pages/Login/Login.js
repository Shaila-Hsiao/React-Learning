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
import { Alert, AlertTitle } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

// password
import IconButton from "@mui/material/IconButton";
// import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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


export default function Login() {
  const navigate = useNavigate();
  // 密碼
  // 密碼欄位設定
  const [values, setValues] = React.useState({
    // userID: "",
    // name:"",
    // email:"",
    password: "",
    // pwdVerify:"",
    showPassword: false
  });
  // 密碼輸入更改
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // 密碼顯示
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  // 滑鼠移置密碼欄位時
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };





  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userID = data.get('userID');
    const passwd =  data.get('passwd');
    console.log({
     userID,passwd
    });
    // Post 給後端檢查
    try {
      const resp = await httpClient.post("//localhost:5000/login", {
        userID,
        passwd,
      });
      // const resp = await httpClient.post("//163.22.17.192:5000/login", {
      //   userID,
      //   passwd,
      // });
      console.log(resp)
      // if Login fail
      if(resp.data === "LoginFail"){
        // alert("帳號或密碼錯誤! \n請重新輸入!");
        handleClick();
      }else{
        // if Login Success , navigate to home
        console.log(userID, passwd);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error)
      // if (error.response.status === 401) {
      //   alert("Invalid credentials");
        
      // }
    }
  };
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          <AlertTitle>Error</AlertTitle>
          <strong>帳號或密碼輸入錯誤</strong>，請重新輸入！
        </Alert>
      </Snackbar>
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
              id="userID"
              label="帳號(userID)"
              name="userID"
              autoComplete="email"
              autoFocus
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="passwd"
              label="密碼"
              type="password"
              id="passwd"
              autoComplete="current-password"
            /> */}
            <FormControl fullWidth required >
              <InputLabel htmlFor="outlined-adornment-password">密碼</InputLabel>
              <OutlinedInput
                id="passwd"
                name="passwd"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end" >
                    
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="密碼"
              />
            </FormControl>
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