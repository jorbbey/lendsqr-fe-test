import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserLogin.scss";
import { Logo } from "./Logo";
import heroImage from "../assets/images/hero-image.svg";
export interface Props {}

export const UserLogin: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const togglePasswordVisibility: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (): void => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter both Email and Password.");
      return;
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <div className="UserLoginLogo">
        <Logo />
      </div>

      <div className="UserLogin">
        {/* hero Image */}
        <div className="heroImage">
          <img src={heroImage} alt="heroImage" />
        </div>

        {/* login Form */}
        <div className="UserLoginForm">
          <div className="UserLoginFormHead">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </div>
          <form action="">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              onClick={togglePasswordVisibility}
              type="button"
              className="passwordBtn"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
            <a href="#!">
              <p>Forgot Paasword?</p>
            </a>
            <button type="button" onClick={handleLogin}>
              LOG IN
            </button>
          </form>
          <div className="errorCtn">{error && <p>{error}</p>}</div>
        </div>
      </div>
    </>
  );
};
