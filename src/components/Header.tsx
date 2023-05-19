import React, { FC } from "react";
import "../styles/Header.scss";
import { Logo } from "./Logo";
import image from "../assets/images/header-img.svg";
export interface Props {}

export const Header: FC = () => {
  return (
    <div>
      <header>
        {/* logo and search input container */}
        <div className="firstCtn">
          <div className="UserLoginLogo">
            <Logo />
          </div>
          {/* search input container */}
          <div className="searchCtn">
            <input type="text" placeholder="Search for anything" />
          </div>
        </div>
        <div className="secondCtn">
          <p>Docs</p>
          <i>BELL</i>
          <img src={image} alt="image" />
          <h4>Adedeji</h4>
          <i>go</i>
        </div>
      </header>
    </div>
  );
};
