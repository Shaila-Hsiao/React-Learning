import React, { useEffect, useState } from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavbarDrawer } from '../../components/navbarDrawer';
import httpClient from "../../httpClient";
import '../../index.css';
import { Footer } from '../../components/footer';
import IconButton from '@mui/material/IconButton';

var cards = [];

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
    const [user, setUser] = useState();
    const [rooms, setRoom] = useState();

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
    // 前往房間簡介設定
    function GoTORoomIntro(roomID) {
        try {
            console.log(roomID);
            navigate("/RoomIntro/?roomID=" + roomID);
        } catch (error) {
            console.log("can't get room num");
        }
    };
    useEffect(() => {
        (async () => {
            try {
                // var resp = '';
                // resp = await httpClient.get("../@me");
                // setUser(resp.data);
                const resp = await httpClient.get("../@meforFile");
                console.log(resp.data.userID)
                console.log(resp.data.name)
                console.log(resp.data.email)
                console.log(resp.data.headshotPath)
                setUser(resp.data);
                console.log(user);
                // 房間部分
                const resp2 = await httpClient.get("../OwnerRoom");
                cards = [];
                const temp = resp2.data.result;
                setRoom(resp2.data.result);
                for (let i = 0; i < temp.length; i++) {
                    cards.push(temp[i]);
                }
                console.log("cards", cards);
            } catch (error) {
                console.log("Not authenticated");
                navigate("/RoomOwnerProfile");
            }
        })();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarDrawer />
            {user && (
                <Box
                    sx={{
                        bgcolor: '#efd9a7',
                        pt: 8,
                        pb: 3,
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} sm={4} align='center'>
                            <Avatar
                                alt="UserName"
                                sx={{ mx: 'auto', width: 200, height: 200 }}
                                src={user.headshotPath} />
                        </Grid>
                        <Grid item xs={12} sm={4} align='center'>
                            <Box sx={{}}>
                                <Typography variant="h3" gutterBottom>{user.name}</Typography>
                                <Typography variant="body1" gutterBottom>
                                    {user.introduction}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} align='center'>
                            <IconButton aria-label="FB" color="primary" href="https://zh-tw.facebook.com/" ><FacebookIcon fontSize="large"  /></IconButton>
                            <IconButton aria-label="IG" color="primary" href="https://www.instagram.com/" ><InstagramIcon fontSize="large" /></IconButton>
                            <IconButton aria-label="Twitter" color="primary" href="https://twitter.com/i/flow/login" ><TwitterIcon fontSize="large" /></IconButton>
                            <Box sx={{ p: 3 }} />
                            {/* <Button
                                variant="contained"
                                size="large"
                                sx={{ bgcolor: '#7f0808', color: '#fff', flexGrow: 0 }}
                            >追蹤</Button> */}
                        </Grid>
                    </Grid>
                </Box>
            )}
            {rooms && (
                <Container sx={{ py: 5 }}>
                    <Typography variant="h5" color='#fff' gutterBottom></Typography>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardActionArea onClick={() => GoTORoomIntro(card[0])}>
                                        <CardMedia
                                            component="img"
                                            image={card[3]}
                                            alt={card[0]}
                                            className="BeerListItem-img"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card[1]}
                                            </Typography>
                                            <Typography>{card[2]}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}
            <Box sx={{ bgcolor: '#efd9a7', p: 3 }} />
            <Footer />
        </ThemeProvider>
    );
}


export default Profile;
