import './App.css';
import React , { useState }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/index";
import SecondPage from "./pages/SecondPage";
// import Login from './pages/Authorities/Login';
// import Signup from './pages/Authorities/SignUp';
import Login from './components/Login/Login';
import album from './components/album/album';
// import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
// import PhotoCamera from '@mui/icons-material';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Route>
      </Routes>
      <Route path='/album' element={<album />}>
      </Route>
    </BrowserRouter>

  );
}

export default App;
