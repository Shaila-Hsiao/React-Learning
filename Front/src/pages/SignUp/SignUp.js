import React, { useState } from 'react';
import validator from "validator";
import PasswordChecklist from "react-password-checklist";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Alert, AlertTitle } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";


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
  const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage(<Typography variant='body' sx={{color:"green",fontWeight:"bold",display: { xs: 'none', md: 'flex' }}}> <CheckCircleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 電子郵件驗證成功！ </Typography> );
      // setMessage("電子郵件驗證成功！");
    } else {
      setMessage(<Typography variant='body' sx={{color:"red",fontWeight:"bold",display: { xs: 'none', md: 'flex' }}}> <ClearIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 請輸入有效的電子郵件！ </Typography>);
      // setMessage("請輸入有效的電子郵件！");
    }
  };

  // 密碼確認
  const [values, setValues] = React.useState({
    passwd: '',
    passwdAgain: '',
    // weightRange: '',
    // showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // 密碼顯示
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
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
      Nullitem += element+".\n"
      console.log("未填寫項:",element)
    });
    console.log(Nullitem)
    if(Nullitem !== ""){
      // alert("尚未填寫以下項目: \n"+Nullitem);
      setAlertContent("尚未填寫以下項目: \n"+Nullitem);
      setAlert(true);
      handleClick();
    } else if (!validator.isEmail(email)){
      setAlertContent("請輸有效的電子郵件！ \n");
      setAlert(true);
      handleClick();
    }
    else if (values.passwd.length < 5) {
      setAlertContent("密碼不足 5 字元！ \n");
      setAlert(true);
      handleClick();
    } else if (values.passwd !== values.passwdAgain) {
      setAlertContent("密碼驗證錯誤！ \n");
      setAlert(true);
      handleClick();
    }
    else{
      try{
        const resp = await httpClient.post("./register", {
          userID,
          name,
          email,
          passwd,
        });
        console.log(resp.data.result);
        if(resp.data.result != null){
          // alert(resp.data.result);
          setAlertContent(resp.data.result);
          setAlert(true);
          handleClick();
        }else{
          // if sign up success , navigate to home
          window.location.href = "/";
        }
      }catch (error) {
        if (error.response.status === 401) {
          alert("Invalid credentials");
          // handleClick();
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
          {alertContent}
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
                  label="帳號"
                  autoFocus
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="使用者名稱"
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
                  onChange={(e) => validateEmail(e)}
                />
                  <span>
                    {message}
                  </span>
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField
                    required
                    fullWidth
                    name="passwd"
                    label="密碼"
                    // type="password"
                    type={passwordShown ? "text" : "password"}
                    id="passwd"
                    value={values.passwd}
                    onChange={handleChange('passwd')}
                    InputProps={{endAdornment: 
                    <IconButton aria-label="showpasswd" onClick={togglePassword}>
                      {passwordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>}}
                  />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="passwordAgain"
                  label="密碼驗證"
                  type="password"
                  id="passwdAgain"
                  value={values.passwdAgain}
                  onChange={handleChange('passwdAgain')}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                { (values.passwd.length >= 5  
                  ? <Typography variant='body' sx={{color:"green",fontWeight:"bold",display: { xs: 'none', md: 'flex' }}}> <CheckCircleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />密碼字元符合 </Typography> 
                  : <Typography variant='body' sx={{color:"red",fontWeight:"bold",display: { xs: 'none', md: 'flex' }}}> <ClearIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 密碼至少 5 字元 </Typography>
                  )}
                {values.passwdAgain === "" ? "" :
                (values.passwd === values.passwdAgain  ? <Typography variant='body' sx={{color:"green",fontWeight:"bold",display: { xs: 'none', md: 'flex' }}}> <CheckCircleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />密碼一致 </Typography> :
                <Typography variant='body' sx={{color:"red",fontWeight:"bold",display: { xs: 'none', md: 'flex' }}}> <ClearIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 密碼不一致 </Typography>
                  )}
              </Grid>
              {/* <Grid item xs={12} sm={10}>
                <TextField
                  required
                  fullWidth
                  // name="verification"
                  label="驗證碼"
                  id="verification"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
              <Box bgcolor="white" alignItems='center'>
                  <VCode />
                </Box>
                <TextField
                  required
                  fullWidth
                  label="放驗證碼的區域"
                />
              </Grid> */}
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