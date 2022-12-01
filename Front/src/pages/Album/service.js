import React, { useEffect, useState } from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { NavbarDrawer } from '../../components/navbarDrawer';
import httpClient from '../../httpClient';
import { Footer } from '../../components/footer';
var temp = "";

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
            paper: '#94bfbf',
        },
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: "lightblue"
        }
    }
});

function ServiceData() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarDrawer />

            <main>
                <Box
                    sx={{
                        padding: 2,
                        bgcolor: '#efd9a7'
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
                                    bgcolor: '#efd9a7',
                                    padding: 10,
                                    alignContent: ''
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        display: 'inline',
                                        bgcolor: 'background.paper',
                                        padding: 2,
                                        borderRadius: '16px',
                                        alignContent: 'center'
                                    }}
                                    gutterBottom>
                                    系統特色
                                </Typography>
                                <Box sx={{ bgcolor: '#efd9a7', p: 2 }} />
                                <Typography variant="h5" gutterBottom>關於紀念館</Typography>
                                <Typography variant="body1" gutterBottom>
                                    使用者自行建立網頁版的 3D 展場，以更具體的方式紀錄想紀念的人事時地物。
                                </Typography>
                                <Box sx={{ bgcolor: '#efd9a7', p: 2 }} />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        display: 'inline',
                                        bgcolor: 'background.paper',
                                        padding: 2,
                                        borderRadius: '16px',
                                        alignContent: 'center'
                                    }}>
                                    常見問題
                                </Typography>
                                <Box sx={{ bgcolor: '#efd9a7', p: 2 }} />
                                <Typography variant="h6" gutterBottom>如何創建房間？</Typography>
                                <Typography variant="body1" gutterBottom>創建房間需要您先登入，登入後就可以在首頁點擊「創建房間」來佈置房間了。</Typography>
                                <Typography variant="h6" gutterBottom>如何在他人房間留言？</Typography>
                                <Typography variant="body1" gutterBottom>每個房間都會有留言板，您在瀏覽完他人房間時就可以點擊留言板進行留言。</Typography>
                                <Typography variant="h6" gutterBottom>如何編輯個人房間？</Typography>
                                <Typography variant="body1" gutterBottom>您可以在屬於自己的房間頁面中，點擊您想要編輯的房面圖片，便會顯示編輯房間的選項。</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default ServiceData;