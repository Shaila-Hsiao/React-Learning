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
<<<<<<< HEAD
import user from '../../assets/images/user.jpg';
import { CardActionArea } from '@mui/material';
import bedroom from '../../assets/images/1.png';
import classroom from '../../assets/images/3.png';
import nullroom from '../../assets/images/2.png';
=======
import user from '../../../src/assets/images/user.jpg';
import { CardActionArea } from '@mui/material';
import bedroom from '../../../src/assets/images/2.png';
import classroom from '../../../src/assets/images/3.png';
import nullroom from '../../../src/assets/images/1.png';
>>>>>>> 15ff6fb302d19361fec8a0949551f787fd562f8b
import Radio, { radioClasses } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const drawerWidth = 240;
const cards = [1];

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
      default: '#92bfc0',
      paper: '#efd9a7',
    },
  },
});

function SelectRoom() {
  const navigate = useNavigate();
  const [RoomEl, setRoomEl] = React.useState(null);
  const openRoom = Boolean(RoomEl);
  const handleRoomClick = (event) => {
    setRoomEl(event.currentTarget);
  };
  const handleRoomClose = () => {
    setRoomEl(null);
  };


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
              sx={{ ml: 2, alignItems: 'self-end' }}
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
      </Main>
    </Box>
    </ThemeProvider>
  );
}


export default SelectRoom;