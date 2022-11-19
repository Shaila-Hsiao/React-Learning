import React , { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';
// import user from '../../assets/images/user.jpg';
import httpClient from "../../httpClient";

var name = '';
var email = '';
var introduction = '';

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
      paper: '#efd9a7',
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "lightblue"
    }
  }
});

function UserData() {
  const navigate = useNavigate();
   // user 更新
  const [user, setUser] = useState();
  const [oldPasswd, setOldPass] = useState('');
  const [passwd, setNewPass] = useState('');
  const [CheckNewPass, setCheckNewPass] = useState('');
  const [HeadShotPath, setHeadShotPath] = useState('');
  function setName(changeName) {
    name = changeName;
  }
  function setEmail(changeEmail) {
    email = changeEmail;
  }
  function setUserIntro(changeUserIntro) {
    introduction = changeUserIntro;
  }
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
  const UpdatePwd = async (event) => {
    console.log("update user pwd");
    if (passwd == CheckNewPass) {
      try {
        const resp = await httpClient.post("../modifyPasswd", {
          oldPasswd,
          passwd,
        });
        console.log(resp);
      } catch (error) {
        console.log('fail');
      }
    }
    else {
      alert('new password is not same');
    }
    navigate("/userdata");
  }

  const UpdateUser = async (event) => {
    console.log("update user intro");
    console.log(name, email, introduction);
    const resp = await httpClient.post("../modifyPersonal", {
      name,
      email,
      introduction,
    });
    console.log(resp);
    navigate("/userdata");
  }


  const convert = async (event) => {
    console.log("in convert")
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    if (file) {
      var headshot = '';
      console.log("in ,", file)
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result); //base64encoded string
        headshot = reader.result;
        console.log("headshot data ", headshot);
        var resp = httpClient.post("../modifyHeadshot", {
          headshot,
        });
        console.log("headshot",resp);
        // setHeadShotPath(resp);
      };
    }
    // navigate("/userdata");
  }
  // user 狀態確認
  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("../@me");
        // const resp = await httpClient.get("//163.22.17.192:5000/@me");
        console.log(resp.data.userID)
        console.log(resp.data.name)
        console.log(resp.data.email)
        console.log(resp.data.headshotPath)
        setUser(resp.data);
        name = resp.data.name;
        email = resp.data.email;
        introduction = resp.data.introduction;
        setHeadShotPath(resp.data.headshotPath);
        console.log(user)
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavbarDrawer />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      </Box>
    {user && (
      <Box
        sx={{
          padding: 2
        }}
      >
        <Box
          sx={{
            bgcolor: '#4c364d',
            padding: 2
          }}
        >
          <Box
            sx={{
              bgcolor: '#fff',
              padding: 1
            }}
          >
            <Box
              sx={{
                bgcolor: '#617f7f',
                padding: 1
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      bgcolor: '#617f7f',
                      padding: 2,
                      height: '100%',
                    }}
                  >
                    <Avatar
                      alt="UserName"
                      sx={{ mx:'auto', width: 120, height: 120 }}
                      src={user.headshotPath} />
                    <Box sx={{ textAlign: 'right' }}>
                    <Button variant="contained" component="label">
                          編輯頭貼
                          <input
                            accept="image/*"
                            style={{
                              display: "none"
                            }}
                            id="button-file"
                            type="file"
                            onChange={convert}
                          />
                      </Button>
                    </Box>
                    <Box sx={{ p: 2 }} />
                    <Box bgcolor='#f6ecd3' borderRadius='4px' padding={1}>
                        更改密碼
                        <Button
                          variant="contained"
                          size="large"
                          onClick={UpdatePwd}
                          sx={{ bgcolor: '#794549', color: '#fff', mr: 4 }}
                        >更改密碼</Button>
                        <TextField
                          onChange={event => setOldPass(event.target.value)}
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="舊密碼"
                          type="password"
                          id="password"
                        />
                        <TextField
                          onChange={event => setNewPass(event.target.value)}
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="新密碼"
                          type="password"
                          id="password"
                        />
                        <TextField
                          onChange={event => setCheckNewPass(event.target.value)}
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="確認密碼"
                          type="password"
                          id="password"
                        />
                      </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate("/")}
                      sx={{ bgcolor: '#7f0808', color: '#fff', mr:4 }}
                    >取消</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      textAlign: "right",
                      bgcolor: '#617f7f',
                      padding: 2,
                      height: '100%',
                    }}
                  >
                    <Box bgcolor='#fff' borderRadius='4px' padding={1}>
                      <TextField
                        required
                        fullWidth
                        id="roomName"
                        label="個人名稱"
                        bgcolor='#fff'
                        defaultValue= {user.name}
                        onChange={event => setName(event.target.value)}
                      />
                    </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Box bgcolor='#fff' borderRadius='4px' padding={1}>
                      <TextField
                        required
                        fullWidth
                        id="roomName"
                        label="電子郵件"
                        bgcolor='#fff'
                        defaultValue={user.email}
                        onChange={event => setEmail(event.target.value)}
                      />
                    </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Box bgcolor='#fff' borderRadius='4px' padding={2}>
                     
                      <TextField
                        required
                        fullWidth
                        id="roomIntro"
                        label="個人簡介"
                        multiline
                        rows={9}
                        bgcolor='#fff'
                        defaultValue={user.introduction}
                        onChange={event => setUserIntro(event.target.value)}
                      />
                      {/* {user.name} */}
                    </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Button
                      variant="contained"
                      size="large"
                      onClick={UpdateUser}
                      sx={{ bgcolor: '#7f0808', color: '#fff', flexGrow: 0 }}
                      >更新</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    )}
    </ThemeProvider>
  );
}

export default UserData;