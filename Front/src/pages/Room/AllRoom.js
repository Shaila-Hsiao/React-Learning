import * as React from 'react'; import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { CardActionArea } from '@mui/material';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import httpClient from '../../httpClient';
import Button from '@mui/material/Button';
var cards = [];

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
      default: '#92bfc0',
      paper: '#efd9a7',
    },
  },
});

function AllRoom() {
  const navigate = useNavigate();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // 更新 room 
  const [rooms, setRoom] = useState();

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
  const openRoom = Boolean(RoomEl);
  const handleRoomClick = (event) => {
    setRoomEl(event.currentTarget);
  };
  const handleRoomClose = () => {
    setRoomEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/userAllRoom");
        console.log(resp.data.result);

        setRoom(resp.data);
        const temp = resp.data.result;
        cards = [];
        console.log("cards", cards);
        for (let i = 0; i < temp.length; i++) {
          cards.push(temp[i]);
        }
        console.log("cards", cards);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const resp = await httpClient.get("//localhost:5000/userAllRoom");
  //       // 資料的內容會是一個 json 裡面是一個 list 中有房間資料的 json
  //       // { [ {room 1 infor }, {room 2 infor }, {room 3 infor }... ] }
  //       console.log(resp.data.result);
  //       setRoom(resp.data.result);
  //       const temp = resp.data.result;
  //       cards = [];
  //       console.log("cards", cards);
  //       for (let i = 0; i < temp.length; i ++) {
  //         cards.push(temp[i]);
  //       }
  //       console.log("cards", cards);
  //     }catch(error) {
  //       console.log("No room data");
  //     }
  //   })();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      {rooms && (
        <NavbarDrawer />
      )}

      <CssBaseline />
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
              全部房間
            </Typography>
          </Container>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField variant="standard" label="Please enter Room Name" id="RoomName" />
            <Button >
              <SearchIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
            </Button>
          </Box>
        </Box>

        {/* Card */}
        {rooms != null ? (
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit  */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardActionArea
                      aria-controls={openRoom ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openRoom ? 'true' : undefined}
                      onClick={handleRoomClick}
                    >
                      <CardMedia
                        component="img"
                        image={card[3]}
                        alt={card[0]}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card[1]}
                        </Typography>
                        <Typography>
                          {card[2]}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Menu
                      id="basic-menu"
                      anchorEl={RoomEl}
                      open={openRoom}
                      onClose={handleRoomClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => navigate("/RoomEdit")}>編輯房間簡介</MenuItem>
                      <MenuItem onClick={() => navigate("/RoomEdit")}>編輯房間</MenuItem>
                      <MenuItem onClick={handleClose}>刪除房間</MenuItem>
                    </Menu>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        ) : (
          <Container maxWidth="sm">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/CreateRoom")}
              sx={{ bgcolor: '#7f0808', color: '#fff' }}
            >創建房間</Button>
          </Container>
        )}
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

export default AllRoom;