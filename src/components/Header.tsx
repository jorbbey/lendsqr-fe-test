import React, { FC } from "react";
import "../styles/Header.scss";
import { Logo } from "./Logo";
import { FaSearch } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaCaretDown } from "react-icons/fa";
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
            <i><FaSearch /></i>
          </div>
        </div>
        <div className="secondCtn">
          <p>Docs</p>
          <i><FaBell /></i>
          <img src={image} alt="image" />
          <h4>Adedeji</h4>
          <i className="caret"><FaCaretDown /></i>
        </div>
      </header>
    </div>
  );
};
