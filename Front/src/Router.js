import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
// import Album from "./pages/Album/album"
// import Home from "./pages/Home/index";
// import SecondPage from "./pages/SecondPage";
// import LogIn from './pages/Album/album_login';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
// import LandingPage from './pages/Home';
// import Album from './pages/Album/album';
import DrawerItem from './pages/Album/drawerItem';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<DrawerItem />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/Album" element={<Album />} /> */}
          {/* <Route path='room' element={<Room />} /> */}
          {/* <Route path='intro' element={<RoomIntro />} /> */}
          <Route path="/DrawerItem" element={<DrawerItem />} />
      </Routes>
    </BrowserRouter>
  )
}
