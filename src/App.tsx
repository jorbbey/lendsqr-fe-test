import { AppRouter } from "./AppRouter";
import { Header } from "./components/Header/Header";
import {UserDetails} from "./components/UserDashboard/UserDetails";
// import { Dashboard } from "./components/UserDashboard/Dashboard";
// import {DashboardCtn} from './components/UserDashboard/DashboardCtn'
// import { UserLogin } from "./components/UserLogin";
// import "./scss/style.scss";
import './styles/App.scss'
import React, { FC } from "react";

const App: FC = () => {
  return (
    <div className="App">
    {/* <UserLogin /> */}
      <AppRouter />
      {/* <Header /> */}
      {/* <Dashboard /> */}
      {/* <DashboardCtn /> */}
      {/* <UserDetails /> */}
    </div>
  );
};

export default App;
