import React, { FC } from "react";
import "../styles/UserDashboard.scss";

export interface UserProps {
  icon: any;
  text: string;
  num: string;
  iconColor: string;
}
const iconBg = "rgb(238, 228, 224)";

export const UserBox: FC<UserProps> = ({ icon, text, num, iconColor }) => {
  return (
    <div className="user-box-ctn">
      <div>
        <i style={{ color: iconColor, backgroundColor: iconBg }}>{icon}</i>
        <p>{text}</p>
        <h2>{num}</h2>
      </div>
    </div>
  );
};
