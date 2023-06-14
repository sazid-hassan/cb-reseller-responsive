import React from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";

const MenuList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const menuList = [
    {
      name: "Dashboard",
      icon: <AiFillDashboard />,
      path: "/",
    },
    {
      name: "Orders",
      icon: <HiOutlineClipboardList />,
      path: "/orders",
    },
  ];

  return (
    <div className="sidebar-menulist">
      {menuList.map((data, index) => (
        <div
          className={
            location.pathname === data.path
              ? "single-menu active"
              : "single-menu"
          }
          key={index}
          onClick={() => navigate(data.path)}
        >
          {data.icon}
          <p>{data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
