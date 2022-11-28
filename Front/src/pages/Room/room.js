import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import { NavbarDrawer } from '../../components/navbarDrawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import BedroomChildIcon from '@mui/icons-material/BedroomChild';
// import Tooltip from '@mui/material/Tooltip';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import Avatar from '@mui/material/Avatar';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import Collapse from '@mui/material/Collapse';
// import user from '../../assets/images/user.jpg';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
// import Badge from '@mui/material/Badge';
// import AppBar from '@mui/material/AppBar';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        <NavbarDrawer />
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
    </ThemeProvider>
  );
}

export default Room;