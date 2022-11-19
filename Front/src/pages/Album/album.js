import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, AlertTitle } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import room1 from '../../assets/images/room1.jpg'; // 圖片的位置
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';
import httpClient from '../../httpClient';
var cards = [];
var temp = "";

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
  // 更新 room 
  const [rooms, setRoom] = useState();
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
    // event.preventDefault();
    try {
      const resp = await httpClient.get("./@me", {
      });
      // const resp = await httpClient.get("//163.22.17.192:5000/@me", {
      // });
      console.log(resp)
      // if login success
      navigate("/createRoom");
      // window.location.href = "//localhost:5000/createRoom";
    } catch (error) {
      if (error.response.status === 401) {
        // alert("請先登入!");
        handleClick();
      }
    }
  }
  const handleChange = (event) => {
    temp = event.target.value;
  };
  const FindRoom = async (event) => {
    console.log("i want to find a room");
    console.log(temp);
    const resp = await httpClient.post("./filterRoomName", {
      temp,
    });
    // const resp = await httpClient.post("//163.22.17.192:5000/filterRoomName", {
    //   temp,
    // });
    console.log(resp.data.result);
    setRoom(resp.data.result);
    const needData = resp.data.result;
    cards = [];
    console.log("cards", cards);
    for (let i = 0; i < needData.length; i++) {
      cards.push(needData[i]);
    }
    console.log("cards", cards);
  }
  // 前往房間簡介設定
  function GoTORoomIntro(roomID) {
    try {
      console.log(roomID);
      navigate("/RoomIntro/?roomID=" + roomID);
    } catch (error) {
      console.log("can't get room num");
    }
  };
  // room 狀態確認
  useEffect(() => {
    (async () => {
      try {
        // 163.22.17.192
        const resp = await httpClient.get("./allRoom");
        // const resp = await httpClient.get("//163.22.17.192:5000/allRoom");
        // 資料的內容會是一個 json 裡面是一個 list 中有房間資料的 json
        // { [ {room 1 infor }, {room 2 infor }, {room 3 infor }... ] }
        console.log(resp.data.result);
        setRoom(resp.data.result);
        const temp = resp.data.result;
        cards = [];
        console.log("cards", cards);
        for (let i = 0; i < temp.length; i++) {
          cards.push(temp[i]);
        }
        console.log("cards", cards);
      } catch (error) {
        console.log("No room data");
      }
    })();
  }, []);
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
        <Alert variant="filled" onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          <AlertTitle>通知</AlertTitle>
          請先<strong>登入</strong>！
        </Alert>
      </Snackbar>
      <CssBaseline />
      {rooms && (
        <NavbarDrawer />
      )}

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
                <TextField onChange={handleChange} variant="standard" fullWidth label="Please enter Room Name" id="RoomName" />
                <Button onClick={FindRoom}>
                  <SearchIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                </Button>
              </Box>
            </Stack>
          </Container>
        </Box>
        {/* Card */}
        {rooms && (
          <Container sx={{ py: 8 }}>
            {/* End hero unit  */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardActionArea onClick={() => GoTORoomIntro(card[0])}>
                      {/* <CardActionArea > */}
                      <CardMedia
                        component="img"
                        image={card[1]}
                        alt={card[0]}
                      />
                      {card[2]}
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
        <Box sx={{ bgcolor: 'background.paper', p: 3 }} />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
        <Typography variant="h6" color='#FFFFFF' align="center" gutterBottom>
          Footer
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
export default Album;