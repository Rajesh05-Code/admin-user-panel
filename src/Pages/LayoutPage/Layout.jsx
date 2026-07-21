import { Outlet } from "react-router-dom";
import { Sidebar } from "../../Component/Sidebar/Sidebar";
import "./layout.css";
import { Header } from "../../Component/Header/Header";

export const Layout = () => {
  return (
    <>
      <div className="main-layout">
        <Sidebar />
        <div className="layout-panel">
          <Header />
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
