import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmpDashboard from "./components/Dashboard/EmpDashboard";
import Header from "./components/Other/Header";
import TaskNumbers from "./components/Other/TaskNumbers";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {

  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
    
  },);

  return (
    <>
      {/* <Login/> */}
      <EmpDashboard />
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
