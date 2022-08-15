import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Album from "./pages/Album/album"
// import Home from "./pages/Home/index";
import Home from "./pages/Home";
// import SecondPage from "./pages/SecondPage";
import LogIn from './pages/Album/album_login';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route index element={<Album />} /> */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Album" element={<Album />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/SecondPage" element={<SecondPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
