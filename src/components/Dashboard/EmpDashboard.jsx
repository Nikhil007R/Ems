import React from 'react'
import Header from '../Other/Header'
import TaskNumbers from '../Other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = ({data, changeUser}) => {

  console.log(data)
  // console.log(changeUser)

  return (
    
    <div className='p-10 h-screen bg-[#1C1C1C]'>
      <Header changeUser={changeUser}/>
        <TaskNumbers data={data}/>
        <TaskList data={data}/>
    </div>

  )
}

export default EmpDashboard