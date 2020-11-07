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
import classnames from "classnames";

function Header() {
  const [init, setInit] = useState({
    prevScrollpos: 0,
    visible: true,
  });

  // Get the previous value (was passed into hook on last render)
  let prevValue = usePrevious(init.prevScrollpos);

  useEffect(() => {
    const handleScroll = () => {
      setInit({
        prevScrollpos: document.body.getBoundingClientRect().top,
        visible: document.body.getBoundingClientRect().top > prevValue,
      });
    };
    window.addEventListener("scroll", handleScroll);
  }, [init]);
  // console.log("Current State 👉 ", init.prevScrollpos);
  // console.log("Previous State 👉 ", prevValue);

  // usePrevious func used to capture immediate changed state
  function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]);
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }

  // console.log(init);

  return (
    // <div
    //   className={classnames("header", {
    //     header__hidden: !init.visible,
    //   })}
    // >
    <div className={`header ${init.visible ? "header" : "header__hidden"}`}>
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
