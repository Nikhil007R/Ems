import React from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import Header from './components/Other/Header'
import TaskNumbers from './components/Other/TaskNumbers'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <>
      {/* <Login/> */}
      {/* <EmpDashboard / >  */}
      <AdminDashboard/>
    </>
  )
}

export default App