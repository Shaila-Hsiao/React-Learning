import * as React from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import ListSubheader from '@mui/material/ListSubheader';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import { CardActionArea } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';
import room1 from '../../assets/images/room1.jpg';
import user from '../../assets/images/user.jpg';
import user2 from '../../assets/images/user2.jpg';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import httpClient from '../../httpClient';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import bedroom from '../../assets/images/2.png';
import classroom from '../../assets/images/3.png';
import nullroom from '../../assets/images/1.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';

const drawerWidth = 240;
const cards = [1, 2, 3, 4];

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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenNotifications = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const roomName = data.get('roomName');
    const introduction =  data.get('roomIntro');
    const private_public =  data.get('gilad');
    const roomContent = "fgkgdgf";
    // const email =  data.get('email');
    // const passwd =  data.get('passwd');
    // roomIntro
    // gilad
    // Post 給後端檢查
    console.log({
      roomName : data.get('roomName'),
      introduction : data.get('roomIntro'),
      private_public : data.get('gilad'),
      // roomName = request.json['roomName']
    // introduction = request.json['introduction']
    // roomContent = request.json['roomContent']
    // private_public = request.json['private_public']
      
    });
    try {
      const resp = await httpClient.post("//localhost:5000/createRoom", {
        roomName ,
        introduction,
        roomContent,
        private_public ,
      });
      console.log(resp)
      // if login success
      navigate("/selectRoom");
      // window.location.href = "//localhost:5000/createRoom";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
        
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavbarDrawer />
      </Box>
      <main>
        <Box sx={{ padding: 2 }} />
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
              
              <Grid container component="form" noValidate onSubmit={handleSubmit} >
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{

                      bgcolor: '#617f7f',
                      padding: 2,
                      height: '100%',
                    }}
                  >
                    <Box bgcolor='#fff' borderRadius='4px'>
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
                    <Box bgcolor='#fff' borderRadius='4px'>
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
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      // onClick={() => navigate("/selectRoom")}
                      sx={{ bgcolor: '#7f0808', color: '#fff' }}
                    >創建</Button>
                  </Box>
                </Grid>
              </Grid>
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
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="0" control={<Radio />} label="空白房間" />
                            <FormControlLabel value="1" control={<Radio />} label="簡易房間" />
                            <FormControlLabel value="2" control={<Radio />} label="教室" />
                        </RadioGroup>
                    </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button 
                            variant="contained"
                            // size="large"
                            onClick={() => navigate("/test")}
                            sx={{ bgcolor: '#7f0808', color: '#fff' }}
                            >開始編輯</Button></Box>
            </Stack>
        </Box>
        
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={3}>
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
                      image={classroom}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      教室
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
        </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}