import React, { FC } from "react";
import '../../scss/style.scss'
import logo from "../../assets/images/logo.svg";


export const Logo: FC = () => {

  return (
    <header className="logo">
      <img src={logo} alt="logo" className="logo__img" />
      <span className="logo__text">lendsqr</span>
    </header>
  );
};
