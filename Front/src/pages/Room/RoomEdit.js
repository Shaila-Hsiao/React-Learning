import React, { useEffect, useState } from 'react';
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
import httpClient from '../../httpClient';
import { NavbarDrawer } from '../../components/navbar/navbarDrawer';

var roomName = '';
var roomImgPath = '';
var private_public = '';
var introduction = '';
var editRoomID = '';
var roomID = '';

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
    const [roomIntro, setRoomIntro] = useState();

    const [state, setState] = React.useState({
        gilad: true,
    });
    function setRoomPrivate_public(OnOrOff) {
        if (OnOrOff == 'None') {
            state.gilad = false;
        }
    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    function setRoomName(changeName) {
        roomName = changeName;
    }

    function setRoomIntroduction(changeIntro) {
        introduction = changeIntro;
    }

    const UpdateRoomIntro = async (event) => {
        console.log("update room intro");
        if (state.gilad == true) {
            private_public = "on";
        } else {
            private_public = "None";
        }
        console.log(roomName, private_public, introduction, editRoomID);
        const resp = await httpClient.post("../editRoom", {
            editRoomID,
            roomName,
            private_public,
            introduction,
        });
        console.log(resp);
        navigate("/allRoom");
    }

    const convert = async (event) => {
        console.log("in convert")
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        if (file) {
            var roomPic = '';
            console.log("in ,", file)
            reader.readAsDataURL(file);
            reader.onload = () => {
                console.log(reader.result); //base64encoded string
                roomPic = reader.result;
                var resp = httpClient.post("../modifyRoomPic", {
                    roomID,
                    roomPic,
                });
                console.log("roomPic", resp);
                // setHeadShotPath(resp);
            };
        }
        // navigate("/userdata");
    }

    // 抓 room 簡介和作者資訊
    useEffect(() => {
        (async () => {
            try {
                var getUrlString = window.location.href;
                var url = new URL(getUrlString);
                roomID = url.searchParams.get('roomID');
                console.log(roomID);
                const resp = await httpClient.post("../getRoomIntro", {
                    roomID,
                });
                console.log(resp.data.roomName);
                console.log(resp.data.introduction);
                editRoomID = roomID;
                roomName = resp.data.roomName;
                roomImgPath = resp.data.roomImgPath;
                private_public = resp.data.private_public;
                introduction = resp.data.introduction;
                setRoomIntro(resp.data);
                setRoomPrivate_public(resp.data.private_public);
            } catch (error) {
                console.log("No room data ");
            }
        })();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <NavbarDrawer />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
            </Box>
            <main>
                {roomIntro && (
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
                                                        defaultValue={roomIntro.roomName}
                                                        onChange={event => setRoomName(event.target.value)}
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
                                                                <input
                                                                    accept="image/*"
                                                                    style={{
                                                                        display: "none"
                                                                    }}
                                                                    id="button-file"
                                                                    type="file"
                                                                    onChange={convert}
                                                                />
                                                            </Button>
                                                        </CardActions>
                                                    </Card>
                                                </Box>
                                                <Box sx={{ p: 2 }} />
                                                <Button
                                                    variant="contained"
                                                    size="large"
                                                    onClick={() => navigate("/allroom")}
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
                                                        defaultValue={roomIntro.introduction}
                                                        onChange={event => setRoomIntroduction(event.target.value)}
                                                    />
                                                </Box>

                                                <Box sx={{ p: 2 }} />

                                                <Box sx={{ textAlign: "right" }}>
                                                    <Button
                                                        variant="contained"
                                                        size="large"
                                                        onClick={UpdateRoomIntro}
                                                        sx={{ bgcolor: '#7f0808', color: '#fff' }}
                                                    >更新</Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </main>
        </ThemeProvider>
    );
}