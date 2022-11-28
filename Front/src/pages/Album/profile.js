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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavbarDrawer } from '../../components/navbarDrawer';
import { Footer } from '../../components/footer';


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
            default: '#92bfc0',
            paper: '#efd9a7',
        },
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: "lightblue"
        }
    }
});

function Profile() {
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarDrawer />


            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#efd9a7',
                        pt: 8,
                        pb: 3,
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} sm={5}>
                            <Avatar
                                alt="UserName"
                                sx={{ mx: 'auto', width: 200, height: 200 }}
                                src={user} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{}}>
                                <Typography variant="h3" gutterBottom>Lin</Typography>
                                {/* <Typography variant="h5" gutterBottom>10000位訂閱者</Typography> */}
                                <Typography variant="body1" gutterBottom>
                                    大家好，我是 ......
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FacebookIcon fontSize="large"  />
                            <InstagramIcon fontSize="large" />
                            <TwitterIcon fontSize="large" />
                            <Box sx={{ p: 3 }}/>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ bgcolor: '#7f0808', color: '#fff', flexGrow: 0 }}
                            >追蹤</Button>
                        </Grid>
                    </Grid>
                </Box>
                {/* Card */}
                <Container sx={{ py: 5 }}>
                <Typography variant="h5" color= '#fff' gutterBottom>所有房間</Typography>
                    {/* End hero unit  */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardActionArea onClick={() => navigate("/intro")}>
                                        <CardMedia
                                            component="img"
                                            image={room1}
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                房間名稱
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Box sx={{ bgcolor: '#efd9a7', p: 3 }} />
            </main>
            <Footer />
        </ThemeProvider>
    );
}


export default Profile;
