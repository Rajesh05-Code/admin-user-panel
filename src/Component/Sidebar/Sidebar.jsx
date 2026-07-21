import "./Sidebar.css";
import { GrOverview } from "react-icons/gr";
import { AiOutlineAppstore, AiOutlineLogout } from "react-icons/ai";
import { FiFileText, FiUsers } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import {
  LuCircleDollarSign,
  LuListTodo,
  LuMessageSquareMore,
} from "react-icons/lu";
import {
  IoCubeOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export const Sidebar = () => {
  const [sizeChange, setSizeChange] = useState(true);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      <div className={sizeChange ? "side-bar" : "hide-text"}>
        <div className="logo-section">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="logo"
            style={{ width: sizeChange ? "60px" : "40px" }}
          />
        </div>
        <span
          className="sizing-btn"
          style={{ left: sizeChange ? "228px" : "48px" }}
          onClick={() => setSizeChange(!sizeChange)}
        >
          {sizeChange ? (
            <MdKeyboardDoubleArrowLeft size={20} />
          ) : (
            <MdKeyboardDoubleArrowRight size={20} />
          )}
        </span>

        <ul
          className="child-sidebar"
          style={{ overflow: sizeChange && "auto" }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>
              <GoHome size={sizeChange ? 22 : 24} />
              {sizeChange && "Dashboard"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Dashboard</span>
              )}
            </li>
          </NavLink>

          <NavLink to="/todolist">
            <li>
              <LuListTodo size={sizeChange ? 22 : 24} />

              {sizeChange && "TodoList"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>TodoList</span>
              )}
            </li>
          </NavLink>

              <NavLink to="/timer">
            <li>
              <LuListTodo size={sizeChange ? 22 : 24} />

              {sizeChange && "Timer"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Timer</span>
              )}
            </li>
          </NavLink>

          
              <NavLink to="/axios">
            <li>
              <LuListTodo size={sizeChange ? 22 : 24} />

              {sizeChange && "Axios"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Axios</span>
              )}
            </li>
          </NavLink>

          <NavLink href="">
            <li>
              <FiUsers size={sizeChange ? 22 : 24} />
              {sizeChange && "Customers"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Customers</span>
              )}
            </li>
          </NavLink>

          <NavLink href="">
            <li>
              <BsBag size={sizeChange ? 22 : 24} />
              {sizeChange && "Orders"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Orders</span>
              )}
            </li>
          </NavLink>

          <NavLink href="">
            <li>
              <LuCircleDollarSign size={sizeChange ? 22 : 24} />
              {sizeChange && "Sales"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Sales</span>
              )}
            </li>
          </NavLink>

          <NavLink href="">
            <li>
              <FiFileText size={sizeChange ? 22 : 24} />
              {sizeChange && "Reports"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Reports</span>
              )}
            </li>
          </NavLink>

          <NavLink href="">
            <li>
              <LuMessageSquareMore size={sizeChange ? 22 : 24} />
              {sizeChange && "Messages"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Messages</span>
              )}
            </li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>
              <IoNotificationsOutline size={sizeChange ? 22 : 24} />
              {sizeChange && "Notification"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Notification</span>
              )}
            </li>
          </NavLink>

          <NavLink
            to="/setting"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>
              <IoSettingsOutline size={sizeChange ? 22 : 24} />
              {sizeChange && "Setting"}
              {!sizeChange && (
                <span className={!sizeChange && "tooltip"}>Setting</span>
              )}
            </li>
          </NavLink>
        </ul>

        <button onClick={handleLogout} className="child-sidebar side-btn">
          <li>
            <AiOutlineLogout size={sizeChange ? 22 : 24} />
            {sizeChange && "Logout"}
          </li>
        </button>

        {/* <NavLink to="" className="side-btn">
            <li>
              <AiOutlineAppstore size={sizeChange ? 22 : 24} />
              {sizeChange && "Logout"}
            </li>
          </NavLink> */}
      </div>
    </>
  );
};
