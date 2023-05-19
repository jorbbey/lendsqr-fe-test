import React, { FC } from "react";
import logo from "../assets/images/logo.svg";


export const Logo: FC = () => {

  return (
    <header className="logoHeader">
      <img src={logo} alt="logo" />
      <span className="logoText">lendsqr</span>
    </header>
  );
};
