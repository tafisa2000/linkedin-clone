import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0adDoUGWVD3jGzfT8grK5Uhw0dLXSk3OWJwZaXI-t95suRZQ-wPF7-Az6KurXDVktV4&usqp=CAU"
          alt=""
        />
        <div className="header_search">
          {/* search icon */}
          <SearchIcon /> <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Nertwork" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/D4D03AQEx-Vw3l9k3wA/profile-displayphoto-shrink_100_100/0/1691427921518?e=1723680000&v=beta&t=BSUgSnJysui3U-e2myh4l1-rOsWheeF2WreQd5TYZvs"
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
