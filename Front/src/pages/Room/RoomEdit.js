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
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';

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

export default function RoomEdit() {
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

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavbarDrawer />
            </Box>
            <main>
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
                                <Grid container>
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
                                                    label="房間名稱"
                                                    bgcolor='#fff'
                                                />
                                            </Box>
                                            <Box sx={{ p: 1 }} />
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Card sx={{ maxWidth: 500 }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            image={room1}
                                                            alt="room photo"
                                                        />
                                                    </CardActionArea>
                                                    <CardActions>
                                                        <Button variant="contained" component="label">
                                                            上傳房間照片
                                                            <input hidden accept="image/*" multiple type="file" />
                                                        </Button>
                                                    </CardActions>
                                                </Card>
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
                                                bgcolor: '#617f7f',
                                                padding: 2,
                                                height: '100%',
                                            }}
                                        >
                                            <Box bgcolor='#fff' borderRadius='4px' sx={{ p: 2, aligntext: 'center' }}>
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
                                            <Box sx={{ p: 1 }} />
                                            <Box bgcolor='#fff' borderRadius='4px'>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="roomIntro"
                                                    label="房間簡介"
                                                    multiline
                                                    rows={13}
                                                    bgcolor='#fff'
                                                />
                                            </Box>
                                            <Box sx={{ p: 2 }} />
                                            <Box sx={{ textAlign: "right" }}>
                                                <Button
                                                    variant="contained"
                                                    size="large"
                                                    onClick={() => navigate("/selectRoom")}
                                                    sx={{ bgcolor: '#7f0808', color: '#fff' }}
                                                >創建</Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </main>
        </ThemeProvider>
    );
}