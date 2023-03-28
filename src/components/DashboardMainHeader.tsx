import React from "react";
import { NavLink } from "react-router-dom";
import IconAddMore from "../assets/Icons/IconAddMore";

const sampleConfig = [
  { text: "Dashboard", path: "#" },
  { text: "All Projects", path: "#" },
  { text: "Schedule", path: "#" },
  { text: "Statistics", path: "#" },
  { text: "Activity", path: "#" },
  { text: "Members", path: "#" },
];

const DashboardMainHeader = () => {
  return (
    <div className="dashboard__content__main-header flex">
      <h2>Dashboard Projects</h2>
      <div className="dashboard__content__main-header__nav ">
        <ul className="flex">
          {sampleConfig.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard__content__main-header__action flex  ">
        <button>
          <IconAddMore />
        </button>
        <p>Add New Project</p>
      </div>
    </div>
  );
};

export default DashboardMainHeader;
