import React from "react";
import { useState, useEffect } from "react";
import "./styles/style.scss";
import Table from "./components/Table";
import  UserDetails  from "./components/UserDetails";

const App =()=> {

  return (
    <>
      <div>
        <Table head={[]} />
        {/* <UserDetails /> */}
      </div>
    </>
  );
}

export default App;