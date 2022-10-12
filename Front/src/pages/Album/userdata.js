import * as React from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import { CardActionArea } from '@mui/material';
import room1 from '../../assets/images/room1.jpg';
import user from '../../assets/images/user.jpg';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useMenu } from '@mui/base/MenuUnstyled';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';

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
      paper: '#efd9a7',
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "lightblue"
    }
  }
});

function UserData() {
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavbarDrawer />
      </Box>
      <Box
        sx={{
          padding: 2
        }}
      >
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
                padding: 1
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      bgcolor: '#617f7f',
                      padding: 2,
                      height: '100%',
                    }}
                  >
                    <Avatar
                      alt="UserName"
                      sx={{ mx:'auto', width: 120, height: 120 }}
                      src={user} />
                    <Box sx={{ textAlign: 'right' }}>
                      <Button variant="contained" component="label">
                        編輯頭貼
                        <input hidden accept="image/*" multiple type="file" />
                      </Button>
                    </Box>
                    <Box sx={{ p: 2 }} />
                    <Box bgcolor='#f6ecd3' borderRadius='4px' padding={1}>
                      更改密碼
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="舊密碼"
                        type="password"
                        id="password"
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="新密碼"
                        type="password"
                        id="password"
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="確認密碼"
                        type="password"
                        id="password"
                      />
                    </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate("/selectRoom")}
                      sx={{ bgcolor: '#7f0808', color: '#fff', mr:4 }}
                    >取消</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      textAlign: "right",
                      bgcolor: '#617f7f',
                      padding: 2,
                      height: '100%',
                    }}
                  >
                    <Box bgcolor='#fff' borderRadius='4px' padding={1}>
                      <TextField
                        required
                        fullWidth
                        id="roomName"
                        label="個人名稱"
                        bgcolor='#fff'
                        defaultValue="Lin"
                      />
                    </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Box bgcolor='#fff' borderRadius='4px' padding={1}>
                      <TextField
                        required
                        fullWidth
                        id="roomName"
                        label="電子郵件"
                        bgcolor='#fff'
                        defaultValue="mikimiomio@gmail.com"
                      />
                    </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Box bgcolor='#fff' borderRadius='4px' padding={2}>
                      <TextField
                        required
                        fullWidth
                        id="roomIntro"
                        label="個人簡介"
                        multiline
                        rows={9}
                        bgcolor='#fff'
                        defaultValue="這個人很懶甚麼都沒留下..."
                      />
                    </Box>
                    <Box sx={{ p: 1.5 }} />
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate("/selectRoom")}
                      sx={{ bgcolor: '#7f0808', color: '#fff', flexGrow: 0 }}
                    >更新</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserData;