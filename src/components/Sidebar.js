import {
  ExpandMoreOutlined,
  HistoryOutlined,
  HomeOutlined,
  OndemandVideoOutlined,
  SubscriptionsOutlined,
  ThumbUpAltOutlined,
  VideoLibraryOutlined,
  WatchLaterOutlined,
  WhatshotOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  console.log(window.screen.width);
  return (
    <div className="sidebar">
      <div className={window.screen.width > 568 ? "sidebar__Y" : "sidebar__X"}>
        <SidebarOptions selected Icon={HomeOutlined} title="Home" />
        <SidebarOptions Icon={WhatshotOutlined} title="Trending" />
        <SidebarOptions Icon={SubscriptionsOutlined} title="Subscription" />
        <SidebarOptions Icon={VideoLibraryOutlined} title="Library" />
        <div className="sidebar__others">
          <hr />
          <SidebarOptions Icon={HistoryOutlined} title="History" />
          <SidebarOptions Icon={OndemandVideoOutlined} title="Your Videos" />
          <SidebarOptions Icon={WatchLaterOutlined} title="Watch Later" />
          <SidebarOptions Icon={ThumbUpAltOutlined} title="Liked Videos" />
          <SidebarOptions Icon={ExpandMoreOutlined} title="Show more" />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
