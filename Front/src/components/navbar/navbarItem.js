
import React ,{useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import httpClient from "../../httpClient";
// import { User } from "../../type";
import { useNavigate } from "react-router-dom";


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

    const navigate = useNavigate();
    const [user, setUser] = useState();
    
    const logoutUser = async () => {
      await httpClient.post("//localhost:5000/logout");
      window.location.href = "/";
    };

    useEffect(() => {
      (async () => {
        try {
          const resp = await httpClient.get("//localhost:5000/@me");
          
          console.log(resp.data.id)
          console.log(resp.data.email)
          
          setUser(resp.data);
        } catch (error) {
          console.log("Not authenticated");
        }
      })();
    }, []);
      
    
    return (

        <ThemeProvider theme={theme}>
            <AppBar position="relative">
                <Toolbar>
                    {/* 假如已經登入 */}
                    {user && (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    
                    )}
                    {/* 假如已經登入 */}
                    <HomeRoundedIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }} noWrap>
                    首頁
                    </Typography>
                    
                    {/* 假如已經登入 */}
                    {user != null ? (
                      <Toolbar>
                      <AccountCircleIcon sx={{ mr: 2 }} />
                     <Typography variant="h6" color="inherit" noWrap>
                      {user.username}
                     </Typography>
                     <Button color="inherit" size='large' onClick={logoutUser}>Sign Out</Button>
                     </Toolbar>
                    ): (
                      // 如果還沒登入
                      <Toolbar>
                      <Button color="inherit" size='large' onClick={() => navigate("/SignIn")}>Login</Button>
                      <Button color="inherit" size='large' onClick={() => navigate("/SignUp")}>SignUp</Button>
                      </Toolbar>
                    )}
                    
                    
                    {/* 假如已經登入 */}
                </Toolbar>
            </AppBar>
    </ThemeProvider>

    );
}

export default NavbarItem;