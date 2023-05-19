import React, { FC } from "react";
import "../styles/Menu.scss";
import { menuData } from "../menuData";
import { Link } from "react-router-dom";
export interface Props {}

export const Menu: FC = () => {
  return (
    <div className="Menu">
      {/* organization switch */}
      <div className="SwitchOrg">
        <i>SO</i>
        <p>Switch Organizations</p>
        <i>go</i>
      </div>
      {/* Dashboard Ctn */}
      <Link to="/dashboard" className="dashboard-link">
        <div className="dashboard-ctn">
          <i>D</i>
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
                  <i>{list.icon}</i>
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
