// import React from 'react'
import { BrowserRouter,Routes, Route,Link } from "react-router-dom";
import React, { Component } from 'react';
import { render } from 'react-dom';

import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Album from './pages/Album/album';
import Room from './pages/Room/room';
import RoomIntro from './pages/Room/RoomIntro';
import CreateRoom from './pages/Room/createRoom';
import AllRoom from './pages/Room/AllRoom';
import UserData from './pages/Album/userdata';
import RoomEdit from './pages/Room/RoomEdit';
import Search from './pages/Album/search';
import ServiceData from './pages/Album/service';
import Profile from "./pages/Album/profile";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Album />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/album" element={<Album />} />  已登入的用戶介面 */}
          <Route path='/Room' element={<Room />} />  {/* 個別房間畫面 */}
          <Route path='/RoomIntro' element={<RoomIntro />} />  {/* 房間簡介 */}
          <Route path='/CreateRoom' element={<CreateRoom />} /> {/*創建房間*/}
          <Route path='/AllRoom' element={<AllRoom />} /> {/* 查看所有房間 */}
          {/* <Route path="/blueprint" component={NotFound}/> */}
          {/* <Link to="/blueprint"/> */}
          <Route path="/userdata" element={<UserData />} /> {/* 用戶資料修改 */}
          <Route path="/roomedit" element={<RoomEdit />} /> {/* 房間資料修改 */}
          <Route path="/search" element={<Search />} /> {/* 搜尋房間 */}
          <Route path="/servicedata" element={<ServiceData />} /> {/* 服務支援 */}
          <Route path="/profile" element={<Profile />} /> {/* 服務支援 */}
          <Route
            path="/blueprint"
            component={() => {
              // window.location.replace('http://127.0.0.1:5000/blueprint');
              window.location.replace('http://163.22.17.192:5000/blueprint');
              return null;
            }}
          />
      </Routes>
    </BrowserRouter>
  )
}