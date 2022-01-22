import React from "react";
import SideBarTitle from "./style";

const SideBar = () => (
  <SideBarTitle>
    <div className="nav">
      <div className="logo">
        <img
          src="https://img.icons8.com/small/96/ffffff/cloud.png"
          alt="logo"
        />
      </div>
      <h1>GC Weather</h1>
      <div className="links">
        <select>
          <option>USA</option>
        </select>
      </div>
    </div>
  </SideBarTitle>
);

export default SideBar;
