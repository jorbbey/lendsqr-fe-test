import React, { FC } from "react";
import "../styles/Menu.scss";
import { menuData } from "../menuData";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
export interface Props {}

export const Menu: FC = () => {
  return (
    <div className="Menu">
      {/* organization switch */}
      <div className="SwitchOrg">
        <i>
          <HiBriefcase />
        </i>
        <p>Switch Organizations</p>
        <i>
          <FaAngleDown />
        </i>
      </div>
      {/* Dashboard Ctn */}
      <Link to="/dashboard" className="dashboard-link">
        <div className="dashboard-ctn">
          <i>
            <FaHouseUser />
          </i>
          <p>Dashboard</p>
        </div>
      </Link>

      {/* Menu Items */}
      <div className="MenuItems">
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
