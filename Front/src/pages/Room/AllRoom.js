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
// var cards = [];
var originalCards = [];
var roomID = '';
var lowerCase = '';
var inputText = '';

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
  function handleRoomClick(event) {
    console.log('click', event.currentTarget);
    setRoomEl(event.currentTarget);
    // ItemSelected(i);
  };
  const handleRoomClose = () => {
    setRoomEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteRoom = async (event) => {
    console.log("delete RoomID:", roomID);
    try {
      const resp = await httpClient.post("./deleteRoom", {
        roomID
      });
      console.log(resp);
    } catch (error) {
      console.log("delete error");
    }
  }
  const roomIntroEdit = async (event) => {
    try {
      navigate("/RoomEdit/?roomID=" + roomID);
    } catch (error) {
      console.log("error enter roomEdit");
    }
  }

  const roomEdit = async (event) => {
    console.log("RoomID:", roomID);
    var RoomInfo = roomID;
    // 前端 取得roomID，
    try {
      const resp = await httpClient.post("./userClickRoom", {
        RoomInfo
      });
      const oauthpage = window.open("/blueprint", "_self", "height=1000,width=500")
      console.log(resp)
    } catch (error) {
      console.log("Not authenticated");
    }

  }

  function setInputText(data) {
    inputText = data;
  }
  const [cards, SetCards] = useState();
  let inputHandler = async (event) => {
    //convert input text to lower case
    lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
    var newcards = [];
    if (inputText === '') {
      SetCards(originalCards);
    }
    else {
      for (var i = 0; i < originalCards.length; i++) {
        if (originalCards[i][1].toLowerCase().includes(inputText)) {
          newcards.push(originalCards[i]);
        }
      }
      console.log("search newcards", newcards);
      SetCards(newcards);
    }
  };
  function ItemSelected(i) {
    console.log(cards[i]);
    roomID = cards[i][0];
  }

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("./userAllRoom");
        // const resp = await httpClient.get("//163.22.17.192:5000/userAllRoom");
        console.log(resp.data.result);
        var newcards = [];
        setRoom(resp.data);
        const temp = resp.data.result;
        for (let i = 0; i < temp.length; i++) {
          newcards.push(temp[i]);
        }
        console.log("cards", newcards);
        originalCards = newcards;
        SetCards(newcards);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

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
            <TextField onChange={inputHandler} variant="standard" label="Please enter Room Name" id="RoomName" />
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
              {cards.map((card, i) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardActionArea
                      aria-controls={openRoom ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openRoom ? 'true' : undefined}
                      onClick={(event) => { handleRoomClick(event); ItemSelected(i); }}
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
                      <MenuItem onClick={roomIntroEdit}>編輯房間簡介</MenuItem>
                      <MenuItem onClick={roomEdit}>編輯房間</MenuItem>
                      <MenuItem onClick={deleteRoom}>刪除房間</MenuItem>
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