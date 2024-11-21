import React from "react";
import dashboard from "../assets/Images/dashboard.svg";
import integration from "../assets/Images/Integration.svg";
import performanceManagement from "../assets/Images/performanceManagement.svg";
import reportanalysis from "../assets/Images/reportanalysis.svg";
import EmployeeManagement from "../assets/Images/EmployeeManagement.svg";
import perfomanance from "../assets/Images/performance.svg";
import support from "../assets/Images/support.svg";
import setting from "../assets/Images/setting.svg";
import circle from "../assets/Images/circle.svg";

const Menu = () => {
  const generalItems = [
    {
      icon: setting,
      label: "Setting",
    },
    {
      icon: support,
      label: "Help and Support",
    },
  ];

  const menuItems = [
    {
      icon: dashboard,
      label: "Dashboard",
    },
    {
      icon: perfomanance,
      label: "OKR Management",
      active: true,
    },
    {
      icon: performanceManagement,
      label: "Performance Management",
    },
    {
      icon: EmployeeManagement,
      label: "Employee Management",
    },
    {
      icon: integration,
      label: "Integration Setting",
    },
    {
      icon: reportanalysis,
      label: "Report and Analytics",
    },
  ];

  return (
    <div className="menu text-[#4b4a4a] ">
      <h2>MENU</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${item.active ? "active  " : ""} flex gap-2 `}
          >
            <img
              src={circle}
              className={`${item.active ? "" : "invisible"}`}
              alt=""
            />
            <div
              className={`flex ${
                item.active ? "bg-[#084545] text-[white] w-full" : ""
              }  gap-3 items-center rounded-lg p-2 cursor-pointer `}
            >
              <img src={item.icon} alt={item.label} className="w-5" />
              {item.label}
            </div>
          </li>
        ))}
      </ul>

      <h2>GENERAL</h2>

      {
        <ul>
          {generalItems.map((item, index) => (
            <li key={index}>
              <div className="flex p-2 gap-2 ml-3.5">
                <img src={item.icon} className="w-5" />
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Menu;
