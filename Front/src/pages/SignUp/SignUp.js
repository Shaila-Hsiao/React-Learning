import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Alert, AlertTitle } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import httpClient from '../../httpClient';

import IconButton from "@mui/material/IconButton";
// import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from '@mui/material/Snackbar';
import { Alert, AlertTitle } from '@mui/material';
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

export  default function SignUp() {
  const navigate = useNavigate();

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





  // ==================================

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userID = data.get('userID');
    const name =  data.get('name');
    const email =  data.get('email');
    const passwd =  data.get('passwd');
    // Post 給後端檢查
    console.log({
      userID : data.get('userID'),
      name : data.get('name'),
      email: data.get('email'),
      passwd: data.get('passwd'),

      
    });
    // 檢查是否有輸入完全
    let NullData = [];
    for (const pair of data.entries()) {
      if (pair[1] === "" ){
        // console.log(data.values());
        // console.log("未填寫: ",pair[0]+pair[1]);
        // alert();
        NullData.push(pair[0]); 
      }
    }
    let Nullitem="";
    NullData.forEach(element => {
      Nullitem += element+",\n"
      console.log("未填寫項:",element)
    });
    console.log(Nullitem)
    if(Nullitem !== ""){
      // alert("尚未填寫以下項目: \n"+Nullitem);
      handleClick();
    }else{
      try{
        // const resp = await httpClient.post("//localhost:5000/register", {
        //   userID,
        //   name,
        //   email,
        //   passwd,
        // });
        const resp = await httpClient.post("./register", {
          userID,
          name,
          email,
          passwd,
        });
        // const resp = await httpClient.post("//163.22.17.192:5000/register", {
        //   userID,
        //   name,
        //   email,
        //   passwd,
        // });
        console.log(resp.data.result);
        if(resp.data.result != null){
          // alert(resp.data.result);
          handleClick();
        }else{
          // if sign up success , navigate to home
          window.location.href = "/";
        }
      }catch (error) {
        if (error.response.status === 401) {
          // alert("Invalid credentials");
          handleClick();
        }
    }
    }
  };
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
          <AlertTitle>錯誤</AlertTitle>
          <strong>資料未填寫完整</strong>！
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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'background.paper', color: '#efd9a7' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            註冊
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  name="userID"
                  required
                  fullWidth
                  id="userID"
                  label="帳號(userID)"
                  autoFocus
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="使用者名稱(name)"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="電子信箱"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  required
                  fullWidth
                  name="passwd"
                  label="密碼"
                  type="password"
                  id="passwd"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  // name="PwdVerify"
                  label="密碼驗證"
                  type={values.showPassword ? "text" : "password"}
                  id="password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  // name="verification"
                  label="驗證碼"
                  id="verification"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="放驗證碼的區域"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'background.paper', color: '#fff' }}
            >
              註冊
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to="/Login" variant="body2">
                  已經有帳戶了？登入
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}