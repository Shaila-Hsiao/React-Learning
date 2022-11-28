import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import httpClient from '../../httpClient';
import bedroom from '../../assets/images/2.png';
import studyroom from '../../assets/images/3.png';
import bandroom from '../../assets/images/3.png';
import nullroom from '../../assets/images/1.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { NavbarDrawer } from '../../components/navbarDrawer';

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

export default function CreateRoom() {
  const navigate = useNavigate();
  const RoomModel= require('../../assets/RoomModel/RoomModel.json'); 
  const StudyRoomModel = require('../../assets/RoomModel/StudyRoomModel.json');
  const BandRoomModel = require('../../assets/RoomModel/BandRoomModel.json');


  const [state, setState] = React.useState({
    gilad: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // model room json
    const data = new FormData(event.currentTarget);
    const roomName = data.get('roomName');
    const introduction = data.get('roomIntro');
    const private_public = data.get('gilad');
    const RM_Radio= data.get('RM_Radio');

    console.log({
      roomName: data.get('roomName'),
      introduction: data.get('roomIntro'),
      private_public: data.get('gilad'),
      RM_Radio: data.get('RM_Radio')
      // roomName = request.json['roomName']
      // introduction = request.json['introduction']
      // roomContent = request.json['roomContent']
      // private_public = request.json['private_public']

    });
    // check Room Model
    let roomContent ="";
    switch (RM_Radio) {
      case '0':{
        // 空白
        break;
      }
      case '1':{
        // 簡易
        roomContent = JSON.stringify(RoomModel)
        console.log("roomContent_Type: ",typeof(roomContent) );
        console.log("roomContent_Switch: ",roomContent );
        break;
      }
      case '2': {
        // 書房
        roomContent = JSON.stringify(StudyRoomModel)
        console.log("roomContent_Type: ", typeof (roomContent));
        console.log("roomContent_Switch: ", roomContent);
        break;
      }
      case '3': {
        // 練團室
        roomContent = JSON.stringify(BandRoomModel)
        console.log("roomContent_Type: ", typeof (roomContent));
        console.log("roomContent_Switch: ", roomContent);
        break;
      }
      default:{
        break;
      }
    }
      
    try {
      const resp = await httpClient.post("./createRoom", {
        roomName,
        introduction,
        roomContent,
        private_public,
      });
      // const resp = await httpClient.post("//163.22.17.192:5000/createRoom", {
      //   roomName,
      //   introduction,
      //   roomContent,
      //   private_public,
      // });
      console.log(resp.data)
      // if login success
      if(resp.data === "name of room is repeat"){
        alert("已經有重複的房間名字了!");
      }
      var RoomInfo = resp.data.roomID;
      const resp_two = await httpClient.post("./userClickRoom", {
        RoomInfo
      });
      const oauthpage = window.open("/blueprint", "_self", "height=1000,width=500")
      console.log(resp_two)

    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <NavbarDrawer />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      </Box>
      <main>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Box sx={{ padding: 2 }}>
          {/* Hero unit */}
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
                  padding: 3
                }}
              >

                <Grid container >
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{

                        bgcolor: '#617f7f',
                        padding: 2,
                        height: '100%',
                      }}
                    >
                      <Box bgcolor='#fff' borderRadius='4px' padding={2}>
                        <TextField
                          required
                          fullWidth
                          id="roomName"
                          name="roomName"
                          label="房間名稱"
                          bgcolor='#fff'
                        />
                      </Box>
                      <Box sx={{ p: 4.5 }} ></Box>
                      <Box bgcolor='#fff' borderRadius='4px' sx={{ p: 5, aligntext: 'center' }}>

                        <FormControl component="fieldset" variant="standard">
                          <FormLabel component="legend">房間設定</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Switch checked={state.gilad} onChange={handleChange} name="gilad" />
                              }
                              label="可否公開"
                              labelPlacement="start"
                            />
                          </FormGroup>
                          <FormHelperText>Be careful</FormHelperText>
                        </FormControl>
                      </Box>
                      <Box sx={{ p: 2 }} />
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/")}
                        sx={{ bgcolor: '#7f0808', color: '#fff' }}
                      >取消</Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        textAlign: 'right',
                        bgcolor: '#617f7f',
                        padding: 2,
                        height: '100%',
                      }}
                    >
                      <Box bgcolor='#fff' borderRadius='4px' padding={2}>
                        <TextField
                          required
                          fullWidth
                          id="roomIntro"
                          name="roomIntro"
                          label="房間簡介"
                          multiline
                          rows={13}
                          bgcolor='#fff'
                        />
                      </Box>
                      <Box sx={{ p: 2 }} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
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
              選擇房間模板
            </Typography>
          </Container>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="RM_Radio"
                >
                  <FormControlLabel value="0" control={<Radio />} label="空白房間" />
                  <FormControlLabel value= "1" control={<Radio />} label="簡易房間" />
                  <FormControlLabel value="2" control={<Radio />} label="書房" />
                  <FormControlLabel value="3" control={<Radio />} label="練團室" />
                </RadioGroup>
              </FormControl>
            </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  // size="large"
                  type= "submit"
                  sx={{ bgcolor: '#7f0808', color: '#fff' }}
                >開始編輯</Button>
              </Box>
          </Stack>
        </Box>

          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={3} >
              <Grid item xs>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={nullroom}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      空白房間
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={bedroom}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      簡易房間
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={studyroom}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      書房
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={bandroom}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      練團室
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
      </Box>
      </main>
    </ThemeProvider>
  );
}