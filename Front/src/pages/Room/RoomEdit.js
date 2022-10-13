import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import room1 from '../../assets/images/room1.jpg';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';

// const cards = [1, 2, 3, 4];

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
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);
    // const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };
    // const handleOpenNotifications = (event) => {
    //     setAnchorElNotifications(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    // const handleCloseNotifications = () => {
    //     setAnchorElNotifications(null);
    // };

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