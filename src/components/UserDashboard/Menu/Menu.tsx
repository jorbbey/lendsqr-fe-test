import React, { FC } from "react";
import "../../../scss/style.scss";
import { menuData } from "./menuData";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
export interface Props {}

export const Menu: FC = () => {
  return (
    <div className="menu">
      {/* organization switch */}
      <div className="menu__switchOrg">
        <i>
          <HiBriefcase />
        </i>
        <p>Switch Organizations</p>
        <i>
          <FaAngleDown />
        </i>
      </div>
      {/* Dashboard Ctn */}
      <Link to="/dashboard" className="menu__dashboardLink">
        <i>
          <FaHouseUser />
        </i>
        <p>Dashboard</p>
      </Link>

      {/* Menu Items */}
      <div className="menu__menuItems">
        {menuData.map((data: string | any) => (
          <li key={data.id}>
            <h5>{data.name}</h5>
            {data.list.map((list: any) => (
              <Link to={list.link} className="menu-link" key={list.item}>
                <div>
                  <i>
                    <FaUserFriends />
                  </i>
                  <p>{list.item}</p>
                </div>
              </Link>
            ))}
          </li>
        ))}
      </div>
    </div>
  );
};
