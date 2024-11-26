import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmpDashboard from "./components/Dashboard/EmpDashboard";
import Header from "./components/Other/Header";
import TaskNumbers from "./components/Other/TaskNumbers";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { Authcontext } from "./context/AuthProvider";
import { data } from "autoprefixer";

const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  const authData = useContext(Authcontext);
  console.log(authData)
  
  useEffect(()=>{

    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])

  const handleLogin = (email, password)=>{
    if(email == "admin@example.com" && password == "123"){
      // console.log("This is Admin")
      setUser("admin");
      setLoggedInUserData(authData.admin)
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin", data: authData.admin}))
    }
    else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && password == e.password);
      if(employee && user !== "employee"){
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data: employee}))

      }
      // console.log("This is User")
    }
    else{
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmpDashboard data={loggedInUserData} /> : null)}
    </>
  );
};

export default App;
