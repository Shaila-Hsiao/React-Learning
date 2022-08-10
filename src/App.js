import './App.css';
<<<<<<< HEAD

import React  from 'react';
=======
import React , { useState }  from 'react';
>>>>>>> 5c7075635e9e0cb2cdef4d6a0dc7ed6f156a8ac6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/index";
import SecondPage from "./pages/SecondPage";
// import Login from './pages/Authorities/Login';
// import Signup from './pages/Authorities/SignUp';

// import Login from './components/Login/Login';


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
// }

function App() {

  // const token = getToken();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
=======
import Login from './components/Login/Login';
import album from './components/album/album';
// import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
// import PhotoCamera from '@mui/icons-material';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

>>>>>>> 5c7075635e9e0cb2cdef4d6a0dc7ed6f156a8ac6
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
