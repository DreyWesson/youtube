import React from "react";
import "./SidebarOptions.css";
function SidebarOptions({ selected, Icon, title }) {
  return (
    <div className={`sidebarOptions ${selected && "selected"}`}>
      <Icon className="sidebarOptions__icon" />
      <h2 className="sidebarOptions__title">{title}</h2>
    </div>
  );
}

export default SidebarOptions;
