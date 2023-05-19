// import { UserDashboard } from "./components/UserDashboard";
// import { UserLogin } from "./components/UserLogin";
// import { Menu } from "./components/Menu";
import { Pagination } from "./components/Pagination";
import { AppRouter } from "./AppRouter";
import "./styles/App.scss";
import React, { FC } from "react";

const App: FC = () => {
  return (
    <div className="App">
      {/* <UserLogin /> */}
      {/* <UserDashboard /> */}
      {/* <Pagination /> */}
      <AppRouter />
    </div>
  );
};

export default App;
