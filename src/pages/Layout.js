import { Outlet} from "react-router-dom";
import OffcanvasExample from "../components/navbar/navbar";
import React , { useState }  from 'react';

const Layout = () => {
  return (
    <>
            <OffcanvasExample/>,
      <Outlet />
    </>
  )
};

export default Layout;