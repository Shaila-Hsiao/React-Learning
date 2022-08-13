
import React  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        default: '#7f0808',
        paper: '#efd9a7',
      },
    },
  });
function NavbarItem() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <HomeRoundedIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }} noWrap>
                    首頁
                    </Typography>
                    <AccountCircleIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                    Alex
                    </Typography>
                </Toolbar>
            </AppBar>
    </ThemeProvider>
    );
}

export default NavbarItem;