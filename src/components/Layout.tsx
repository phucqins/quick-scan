import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="master-wrapper">
      <Header />
      <div className="container">
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
