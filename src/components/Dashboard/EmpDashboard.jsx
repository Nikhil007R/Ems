import React from 'react'
import Header from '../Other/Header'
import TaskNumbers from '../Other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = ({data}) => {

  console.log(data)

  return (
    
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header data={data}/>
        <TaskNumbers data={data}/>
        <TaskList data={data}/>
    </div>

  )
}

export default EmpDashboard