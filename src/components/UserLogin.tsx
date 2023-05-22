import React, { FC, useState } from "react";
import '../scss/style.scss'
import { Logo } from "./Header/Logo";
import heroUrl from "../assets/images/hero-image.svg";
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

  const heroImage: string = heroUrl;

  return (
    <div className="login">
      <section className="login__logo">
        <Logo />
      </section>

      <main className="login__main">
        {/* hero Image */}
        <section className="login__main__image">
          <img src={heroImage} alt="heroImage" />
        </section>

        {/* login Form */}
        <section className="login__main__form">
          <div className="login__main__form__head">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </div>
          <form action="#!" id="login-form">
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

            <button
              type="button"
              onClick={handleLogin}
              className="login__main__form__btn"
            >
              LOG IN
            </button>
          </form>
          <div className="login__main__errorCtn">{error && <p>{error}</p>}</div>
        </section>
      </main>
    </div>
  );
};
