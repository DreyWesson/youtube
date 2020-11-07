import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppsOutlined,
  NotificationsOutlined,
  SearchOutlined,
  VideoCallOutlined,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" name="" id="" />
        <SearchOutlined className="header__inputButton" />
      </div>
      <div className="header__right">
        <VideoCallOutlined className="header__rightIcons" />
        <AppsOutlined className="header__rightIcons" />
        <NotificationsOutlined className="header__rightIcons" />
        <Avatar
          className="header__rightAvatar"
          alt="avatar"
          src="https://avatars.dicebear.com/api/human/kasjjdjghvhv.svg"
        />
      </div>
    </div>
  );
}

export default Header;
