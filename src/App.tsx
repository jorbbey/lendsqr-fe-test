import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./styles/style.scss";
import Table from "./components/Table";
import UserDetails from "./components/UserDetails";


const App = () => {
   const [activeUserDetails, setActiveUserDetails] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/dashboard"
            element={<Table head={[]} activeUserdetails={activeUserDetails} setActiveUserdetails={setActiveUserDetails} />}
          />
          <Route
            path="/user_details"
            element={<UserDetails activeUserdetails={activeUserDetails} setActiveUserdetails={setActiveUserDetails} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;