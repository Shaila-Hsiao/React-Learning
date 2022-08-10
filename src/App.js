
import './App.css';

import React  from 'react';
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
