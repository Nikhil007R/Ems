import React from 'react'
import Header from '../Other/Header'
import TaskNumbers from '../Other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = () => {
  return (
    
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header/>
        <TaskNumbers/>
        <TaskList/>
    </div>

  )
}

export default EmpDashboard