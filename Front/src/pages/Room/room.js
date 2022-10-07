import * as React from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import user from '../../assets/images/user.jpg';
import { CardActionArea } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';

const cards = [1, 2, 3];

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

function Room() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
                href="/"
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
              歡迎來到米奇妙妙屋
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              希望來參觀的人都能留下自己的想法！
            </Typography>
          </Container>
        </Box>
        {/* Card */}
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
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
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
                    <MenuItem onClick={handleClose}>編輯該空間</MenuItem>
                    <MenuItem onClick={handleClose}>刪除該空間</MenuItem>
                  </Menu>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
        <Typography variant="h6" color='#FFFFFF' align="center" gutterBottom>
          Footer
        </Typography>
        {/* <Typography
          variant="subtitle1"
          align="center"
          color='#FFFFFF'
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        {/* <Copyright /> */}
      </Box>
    </ThemeProvider>
  );
}

export default Room;