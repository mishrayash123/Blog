import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Context } from "../../main";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const SideBar = ({ setComponent }) => {
  const [show, setShow] = useState(false);
  const { mode, setMode, setIsAuthenticated, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    localStorage.removeItem("token")
  };

  const gotoHome = () => {
    navigateTo("/");
  };
  const handleComponent = (value) => {
    setComponent(value);
  };
  return (
    <>
      <div className="icon-wrapper" onClick={() => setShow(!show)}>
        <RxHamburgerMenu />
      </div>
      <section className={show ? "show-sidebar sidebar" : "sidebar"}>
        <div className="icon-wrapper-arrow" onClick={() => setShow(!show)}>
          <FaArrowLeft />
        </div>
        <div className="user-detail">
          <img src={user && user.avatar.url} alt="avatar" />
          <p>{user.name}</p>
        </div>
        <ul>
          <button style={{"cursor":"pointer"}} onClick={() => handleComponent("My Blogs")}>MY BLOGS</button>
          <button style={{"cursor":"pointer"}} onClick={() => handleComponent("Create Blog")}>
            CREATE BLOG
          </button>
          <button style={{"cursor":"pointer"}} onClick={() => handleComponent("Analytics")}>
            CHART
          </button>
          <button style={{"cursor":"pointer"}} onClick={() => handleComponent("My Profile")}>
            MY PROFILE
          </button>
          <button style={{"cursor":"pointer"}} onClick={gotoHome}>HOME</button>
          <button style={{"cursor":"pointer"}} onClick={handleLogout}>LOGOUT</button>
          <button
          style={{"cursor":"pointer"}}
            onClick={() =>
              mode === "light" ? setMode("dark") : setMode("light")
            }
            className={
              mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
            }
          >
            {mode === "light" ? (
              <CiLight className="light-icon" />
            ) : (
              <MdDarkMode className="dark-icon" />
            )}
          </button>
        </ul>
      </section>
    </>
  );
};

export default SideBar;
