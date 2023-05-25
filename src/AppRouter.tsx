import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserLogin } from "./components/UserLogin";
import { DashboardCtn } from "./components/UserDashboard/DashboardCtn";
// import { UserDetails } from "./components/UserDashboard/UserDetails";
import { UserDetail } from "./components/UserDashboard/UserDetail";

export interface Props {}
export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-detail" element={<UserDetail />} />
        <Route path="/dashboard" element={<DashboardCtn />} />
        <Route path="/" element={<UserLogin />} />
      </Routes>
    </Router>
  );
};
