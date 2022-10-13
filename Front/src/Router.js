import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
// import Album from "./pages/Album/album"
// import Home from "./pages/Home/index";
// import SecondPage from "./pages/SecondPage";
// import LogIn from './pages/Album/album_login';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
// import LandingPage from './pages/Home';
import Album from './pages/Album/album';
// import DrawerItem from './pages/Album/drawerItem';
import Room from './pages/Room/room';
import RoomIntro from './pages/Room/RoomIntro';
import CreateRoom from './pages/Room/createRoom';
import AllRoom from './pages/Room/AllRoom';
// import SelectRoom from './pages/Room/selectRoom';
import UserData from './pages/Album/userdata';
import RoomEdit from './pages/Room/RoomEdit';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Album />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/album" element={<Album />} />  已登入的用戶介面 */}
          <Route path='/Room' element={<Room />} />  {/* 個別房間畫面 */}
          <Route path='/Intro' element={<RoomIntro />} />  {/* 房間簡介 */}
          <Route path='/CreateRoom' element={<CreateRoom />} /> {/*創建房間*/}
          <Route path='/AllRoom' element={<AllRoom />} /> {/* 查看所有房間 */}

          <Route path="/userdata" element={<UserData />} /> {/* 用戶資料修改 */}
          <Route path="/roomedit" element={<RoomEdit />} /> {/* 房間資料修改 */}
      </Routes>
    </BrowserRouter>
  )
}