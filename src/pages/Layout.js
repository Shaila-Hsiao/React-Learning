import { Outlet} from "react-router-dom";
import OffcanvasExample from "../navbar/navbar";
const Layout = () => {
  return (
    <>
        
            <OffcanvasExample/>,
          

      <Outlet />
    </>
  )
};

export default Layout;