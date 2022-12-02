import React ,{useEffect,useState} from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import room1 from '../../assets/images/room1.jpg';
import user2 from '../../assets/images/user2.jpg';
import { NavbarDrawer } from '../../components/navbarDrawer';
import httpClient from '../../httpClient';
import Stack from '@mui/material/Stack';
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
      default: '#efd9a7',
      paper: '#92bfc0',
    },
  },
});

export default function RoomIntro() {
  const navigate = useNavigate();
  const [RoomInfo, setRoomInfo] = useState();

  const redirectToGoogle = () => {
    // window.location.href = location.href+"/blueprint";
  };
  const LoadRoom = async () =>{
    console.log("RoomID:",RoomInfo);
    // 前端 取得roomID，
    try {
      const resp = await httpClient.post("../userClickRoom",{
        RoomInfo
      });
      // const resp = await httpClient.post("//163.22.17.192:5000/userClickRoom",{
      //   RoomInfo
      // });
      const oauthpage = window.open("/blueprint", "_self", "height=1000,width=500")
      
      // navigate("/blueprint");
      // redirectToGoogle();
      // console.log(resp.data.userID)
      // console.log(resp.data.name)
      // location.href += "/blueprint";
      // window.location.replace(location.href)
      // window.location.href = "https://www.typescriptlang.org";
      // console.log(location.href);
      //跳轉到HTTP://www.google.com
      console.log(resp)
    } catch (error) {
      console.log("Not authenticated");
    }
    
  }
  // 前往個人簡介
  function GoTOUserIntro(number) {
    try {
      console.log(number);
      navigate("/profile/?number=" + number);
    } catch (error) {
      console.log("can't get user number");
    }
  };

  // 抓 room 簡介和作者資訊
  useEffect(() => {
    (async () => {
      try {
        var getUrlString = window.location.href;
        var url = new URL(getUrlString);
        var roomID = url.searchParams.get('roomID');
        console.log(roomID);
        const resp = await httpClient.post("../RoomIntro", {
            roomID,
        });
        console.log(resp.data.result);
        setRoomInfo(roomID);
        const temp = resp.data.result;
        cards = [];
        for (let i = 0; i < temp[0].length; i ++) {
          cards.push(temp[0][i]);
        }
        console.log("cards", cards);
      } catch (error) {
        console.log("No room data");
      }
    })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {RoomInfo&&(
        <NavbarDrawer />
      )}
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      </Box>
        <main>
        {/* Hero unit */}
        <Box sx={{ bgcolor: '#efd9a7', p: 1 }} ></Box>
        <Box sx={{ bgcolor: '#efd9a7', p: 2 }} >
        <Box
            sx={{
                bgcolor: '#617f7f'
            }}
        >
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            bgcolor: '#bca878',
                            padding: 2,
                            height: '100%',
                        }}
                    >
                        <Card 
                            sx={{
                                alignItems: 'end',
                            }}
                            >
                            <CardMedia
                                component="img"
                                height= '350'
                                image={cards[2]}
                                alt="room"
                            />
                        </Card>
                        <Typography variant='h6'>
                            <p>{cards[1]}</p>
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => navigate("/")}
                            sx={{ bgcolor: '#7f0808', color: '#fff' }}
                        >返回</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                            bgcolor: '#617f7f',
                            padding: 2,
                            height: '100%',
                        }}
                    >
                        <Avatar
                          alt="UserName"
                          sx={{ mx:'auto', width: 150, height: 150 }}
                          src={cards[6]}
                          ></Avatar>
                        <Box sx={{ p:3}} />
                        <Stack
                          sx={{ pt: 4 }}
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                        >
                          <Typography variant='h4'>About Author : {cards[3]}</Typography>
                          <Button variant="contained" size="large" onClick={() => GoTOUserIntro(cards[7])}>About</Button>
                        </Stack>
                        <Box sx={{ p:3}} />
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                padding: 3,
                                borderRadius: '16px'
                            }}
                        >
                            <Typography variant='h6'>{cards[0]}</Typography>
                            <Typography variant='h6'>Author : {cards[3]}</Typography>
                            <Typography variant='h6'>Email : {cards[4]}</Typography>
                            <Typography variant='h6'>{cards[5]}</Typography>
                        </Box>
                        <Box sx={{ p:1}} />
                        <Button variant="contained" size="large" onClick={LoadRoom} >參觀</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Box>
        </main>
    </ThemeProvider>
  );
}