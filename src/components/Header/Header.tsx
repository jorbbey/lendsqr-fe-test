import React, { FC, useState } from "react";
import "../../scss/style.scss";
import { Logo } from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import image from "../../assets/images/header-img.svg";
export interface Props {}

export const Header: FC = () => {
  const [pageOpen, setPageOpen] = useState<boolean>(false);
  return (
    <header className="head">
      {/* logo and search input container */}
      <section className="head__firstCtn">
        <div className="head__firstCtn__logo">
          <Logo />
        </div>
        {/* search input container */}
        <div className="head__firstCtn__search">
          <input type="text" placeholder="Search for anything" />
          <i>
            <FaSearch />
          </i>
        </div>
      </section>
      <i className="pageToggle" onClick={() => setPageOpen(!pageOpen)}>
        m
      </i>

      {pageOpen ? (
        <section className="head__mobile__secondCtn">
          <p>Docs</p>
          <i>
            <FaBell />
          </i>
          <img src={image} alt="image" />
          <h4>Adedeji</h4>
          <i className="caret">
            <FaCaretDown />
          </i>
        </section>
      ) : (
        ""
      )}
      <section className="head__secondCtn">
        <p>Docs</p>
        <i>
          <FaBell />
        </i>
        <img src={image} alt="image" />
        <h4>Adedeji</h4>
        <i className="caret">
          <FaCaretDown />
        </i>
      </section>
    </header>
  );
};
