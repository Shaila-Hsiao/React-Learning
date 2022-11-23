import React ,{useEffect,useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import httpClient from "../httpClient";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

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
        paper: '#94bfbf',
      },
    },
  });
export const NavbarDrawer = () => {
    const navigate = useNavigate();
    // user 更新
    const [user, setUser] = useState();
    
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





    const logoutUser = async () => {
      await httpClient.post("../logout");
      // await httpClient.post("//163.22.17.192:5000/logout");
      window.location.href = "/";
    };
    // user 狀態確認
    useEffect(() => {
      (async () => {
        try {
          // 163.22.17.192
          const resp = await httpClient.get("../@me");
          // const resp = await httpClient.get("//163.22.17.192:5000/@me");
          // console.log(resp.data)
          // console.log(resp.data.name)
          // console.log(resp.data.email)
          setUser(resp.data);
        } catch (error) {
          console.log("Not authenticated");
        }
      })();
    }, []);
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
                <MenuItem onClick={() => navigate("/servicedata")}>
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
              href="/"
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              <MenuItem onClick={() => navigate("/servicedata")}>
                服務支援
              </MenuItem>
              <MenuItem onClick={() => navigate("/")}>
                聯絡我們
              </MenuItem>
            </Box>

            {user && (
            <Box sx={{ mr:2 }}>
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
            )}
            {user != null ?(
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src = {user.headshotPath}/>
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
                <MenuItem onClick={() => navigate("/profile")}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  我的主頁
                </MenuItem>
                <MenuItem onClick={() => navigate("/allroom")}>
                  <ListItemIcon>
                    <BedroomChildIcon fontSize="small" />
                  </ListItemIcon>
                  {user.name}的房間
                </MenuItem>
                <MenuItem onClick={() => navigate("/userdata")}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  個人基本資料
                </MenuItem>
                <MenuItem onClick={logoutUser}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  登出
                </MenuItem>
              </Menu>
            </Box>
            ):(
              <Toolbar>
                  <Button color="inherit" size='large' onClick={() => navigate("/Login")}>Login</Button>
                  <Button color="inherit" size='large' onClick={() => navigate("/SignUp")}>SignUp</Button>
              </Toolbar>
          )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    </ThemeProvider>
  )
}