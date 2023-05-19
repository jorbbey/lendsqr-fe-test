import React, { FC } from "react";
import '../styles/UserDashboard.scss'

export interface Props {
  icon: string;
  text: string;
  num: string;

}

export const UserBox: FC<Props> = ({icon, text, num}) => {
  return (
    <div className="user-box-ctn">
      <i>{icon}</i>
      <p>{text}</p>
      <h2>{num}</h2>
    </div>
  );
};
