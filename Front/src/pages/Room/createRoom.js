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
      // window.location.href = "/selectRoom";
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
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <PermContactCalendarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/album"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                首頁
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem onClick={() => navigate("/")}>
                    會員中心
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/")}>
                    服務支援
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/")}>
                    聯絡我們
                  </MenuItem>
                </Menu>
              </Box>

              <PermContactCalendarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                首頁
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={() => navigate("/")}>
                  會員中心
                </MenuItem>
                <MenuItem onClick={() => navigate("/")}>
                  服務支援
                </MenuItem>
                <MenuItem onClick={() => navigate("/")}>
                  聯絡我們
                </MenuItem>
              </Box>

              <Box sx={{ mr: 2 }}>
                <Tooltip title="Open Notifications">
                  <IconButton onClick={handleOpenNotifications} sx={{ p: 0 }} size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  classes={theme.menu}
                  anchorEl={anchorElNotifications}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNotifications)}
                  onClose={handleCloseNotifications}
                >
                  <MenuItem onClick={() => navigate("")}>
                    用戶 Rita 訂閱你了！
                  </MenuItem>
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src={user} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  style={theme.menu}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => navigate("/allroom")}>
                    <ListItemIcon>
                      <BedroomChildIcon fontSize="small" />
                    </ListItemIcon>
                    全部房間
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/userdata")}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    個人基本資料
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/login")}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    登出
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
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
                      sx={{ bgcolor: '#7f0808', color: '#fff' }}
                    >創建</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
}