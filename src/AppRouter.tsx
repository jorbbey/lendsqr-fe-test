import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserLogin } from "./components/UserLogin";
import { DashboardCtn } from "./components/UserDashboard/DashboardCtn";
import { UserDetails } from "./components/UserDashboard/UserDetails";

export interface Props {}
export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/dashboard" element={<DashboardCtn />} />
        <Route path="/" element={<UserLogin />} />
      </Routes>
    </Router>
  );
};
