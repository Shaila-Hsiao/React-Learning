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
const drawerWidth = 240;
const cards = [1, 2, 3, 4];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openEl = Boolean(anchorEl);

  const [openlist, setOpenList] = React.useState(true);

  const handleClickList = () => {
    setOpenList(!openlist);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      window.location.href = "/selectRoom";
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
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={() => navigate("/album")} color="inherit" noWrap>
            <Typography variant="h6">
              首頁
            </Typography>
          </Button>
          <Typography sx={{ flexGrow: 1 }} noWrap />
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openEl ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openEl ? 'true' : undefined}
            >
              <Avatar 
                sx={{ width: 32, height: 32 }}
                src={user}
              />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={openEl}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar src={user} /> Profile
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={() => navigate("/login")}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              現有房間
            </ListSubheader>
          }>
        </List>
        <List>
          {['米奇妙妙屋', 'Red_Room', 'Bed_Room'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BedroomChildIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              選單
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClickList}>
            <ListItemIcon>
              <BedroomChildIcon />
            </ListItemIcon>
            <ListItemText primary="現有房間" />
            {openlist ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openlist} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/room")}>
                <ListItemIcon>
                  {/* <StarBorder /> */}
                </ListItemIcon>
                <ListItemText primary="米奇妙妙屋" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/room")}>
                <ListItemIcon>
                  {/* <StarBorder /> */}
                </ListItemIcon>
                <ListItemText primary="小瓦房" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <main>
        {/* Hero unit */}
        <Box
             sx={ {
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
                                <Box bgcolor='#fff' borderRadius= '4px'>
                                    <TextField
                                        required
                                        fullWidth
                                        id="roomName"
                                        name="roomName"
                                        label="房間名稱"
                                        bgcolor='#fff'
                                    />
                                </Box>
                                <Box sx={{ p:4.5 }} ></Box>
                                <Box bgcolor='#fff' borderRadius= '4px' sx={{ p:5, aligntext: 'center'}}>
                                  
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
                                        {/* <FormControlLabel
                                          control={
                                            <Switch checked={state.jason} onChange={handleChange} name="jason" />
                                          }
                                          label="可否留言"
                                          labelPlacement="start"
                                        /> */}
                                      </FormGroup>
                                      <FormHelperText>Be careful</FormHelperText>
                                    </FormControl>
                                </Box>
                                <Box sx={{ p:2 }} />
                                <Button 
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate("/selectRoom")}
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
                                <Box bgcolor='#fff' borderRadius= '4px'>
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
                                <Box sx={{ p:2 }} />
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
        </main>
      </Main>
    </Box>
    </ThemeProvider>
  );
}