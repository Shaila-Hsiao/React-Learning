import * as React from 'react';
import { Alert, AlertTitle } from '@mui/material';
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
import Snackbar from '@mui/material/Snackbar';
import user2 from '../../assets/images/user2.jpg';


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
            default: '#f6ecd3',
            paper: '#efd9a7',
        },
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: "lightblue"
        }
    }
});

function Search() {
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
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pb: 3,
                    }}
                >
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <SearchIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                            <TextField variant="standard" fullWidth label="Room Name" id="RoomName" defaultValue="米奇妙妙屋" />
                        </Box>
                    </Stack>
                </Box>
                {/* Card */}
                <Box sx={{ bgcolor: 'background.paper', padding: 10 }}>
                <Box>
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        bgcolor: 'background.default',
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
                                            height='350'
                                            image={room1}
                                            alt="room"
                                        />
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        bgcolor: 'background.default',
                                        padding: 2,
                                        height: '100%',
                                    }}
                                >
                                    <Typography variant='h4'>米奇妙妙屋</Typography>
                                    <Typography variant='h6'>
                                        <p>那年夏天...</p>
                                        <p>因為專題讓我們相遇，</p>
                                        <p>度過多少個夜晚多少個白晝</p>
                                        <p>以此屋為念</p>
                                    </Typography>
                                    <Box
                                        sx={{
                                            bgcolor: '#685254',
                                            padding: 2,
                                            borderRadius: '16px'
                                        }}
                                    >
                                        <Grid container>
                                            <Grid item xs={9} sm={3}>
                                                <Avatar
                                                    alt="UserName"
                                                    sx={{ mx: 'auto', width: 50, height: 50 }}
                                                    src={user2}
                                                ></Avatar>
                                            </Grid>
                                            <Grid item xs={9} sm={6}>
                                                <Typography variant='h4' color='#fff'>Rita</Typography>
                                                {/* </Box> */}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ bgcolor: 'background.paper', p: 3 }} />
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        bgcolor: 'background.default',
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
                                            height='350'
                                            image={room1}
                                            alt="room"
                                        />
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        bgcolor: 'background.default',
                                        padding: 2,
                                        height: '100%',
                                    }}
                                >
                                    <Typography variant='h4'>米奇妙妙屋</Typography>
                                    <Typography variant='h6'>
                                        <p>那年夏天...</p>
                                        <p>因為專題讓我們相遇，</p>
                                        <p>度過多少個夜晚多少個白晝</p>
                                        <p>以此屋為念</p>
                                    </Typography>
                                    <Box
                                        sx={{
                                            bgcolor: '#685254',
                                            padding: 2,
                                            borderRadius: '16px'
                                        }}
                                    >
                                        <Grid container>
                                            <Grid item xs={9} sm={3}>
                                                <Avatar
                                                    alt="UserName"
                                                    sx={{ mx: 'auto', width: 50, height: 50 }}
                                                    src={user2}
                                                ></Avatar>
                                            </Grid>
                                            <Grid item xs={9} sm={6}>
                                                <Typography variant='h4' color='#fff'>Rita</Typography>
                                                {/* </Box> */}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ bgcolor: 'background.paper', p: 3 }} />
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        bgcolor: 'background.default',
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
                                            height='350'
                                            image={room1}
                                            alt="room"
                                        />
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        bgcolor: 'background.default',
                                        padding: 2,
                                        height: '100%',
                                    }}
                                >
                                    <Typography variant='h4'>米奇妙妙屋</Typography>
                                    <Typography variant='h6'>
                                        <p>那年夏天...</p>
                                        <p>因為專題讓我們相遇，</p>
                                        <p>度過多少個夜晚多少個白晝</p>
                                        <p>以此屋為念</p>
                                    </Typography>
                                    <Box
                                        sx={{
                                            bgcolor: '#685254',
                                            padding: 2,
                                            borderRadius: '16px'
                                        }}
                                    >
                                        <Grid container>
                                            <Grid item xs={9} sm={3}>
                                                <Avatar
                                                    alt="UserName"
                                                    sx={{ mx: 'auto', width: 50, height: 50 }}
                                                    src={user2}
                                                ></Avatar>
                                            </Grid>
                                            <Grid item xs={9} sm={6}>
                                                <Typography variant='h4' color='#fff'>Rita</Typography>
                                                {/* </Box> */}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ bgcolor: 'background.paper', p: 3 }} />
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        bgcolor: 'background.default',
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
                                            height='350'
                                            image={room1}
                                            alt="room"
                                        />
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        bgcolor: 'background.default',
                                        padding: 2,
                                        height: '100%',
                                    }}
                                >
                                    <Typography variant='h4'>米奇妙妙屋</Typography>
                                    <Typography variant='h6'>
                                        <p>那年夏天...</p>
                                        <p>因為專題讓我們相遇，</p>
                                        <p>度過多少個夜晚多少個白晝</p>
                                        <p>以此屋為念</p>
                                    </Typography>
                                    <Box
                                        sx={{
                                            bgcolor: '#685254',
                                            padding: 2,
                                            borderRadius: '16px'
                                        }}
                                    >
                                        <Grid container>
                                            <Grid item xs={9} sm={3}>
                                                <Avatar
                                                    alt="UserName"
                                                    sx={{ mx: 'auto', width: 50, height: 50 }}
                                                    src={user2}
                                                ></Avatar>
                                            </Grid>
                                            <Grid item xs={9} sm={6}>
                                                <Typography variant='h4' color='#fff'>Rita</Typography>
                                                {/* </Box> */}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

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

export default Search;
