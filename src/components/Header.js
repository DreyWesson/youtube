import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppsOutlined,
  NotificationsOutlined,
  SearchOutlined,
  VideoCallOutlined,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useScrollPosition } from "../scroll";

function Header() {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <div className={`header ${hideOnScroll ? "active" : "header__hidden"}`}>
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
