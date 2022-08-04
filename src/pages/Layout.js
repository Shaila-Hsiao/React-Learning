import { Outlet} from "react-router-dom";
import OffcanvasExample from "../components/navbar/navbar";
const Layout = () => {
  return (
    <>
            <OffcanvasExample/>,
      <Outlet />
    </>
  )
};

export default Layout;