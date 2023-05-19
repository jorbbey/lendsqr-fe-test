import React, {FC} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {UserLogin} from "./components/UserLogin";
import {UserDashboard} from "./components/UserDashboard";
// import NotFound from "./components/NotFound";

export interface Props {}
export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/" element={<UserLogin/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
  );
};

