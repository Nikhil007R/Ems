import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(Authcontext);
    // console.log(authData.employees)
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>

            <div className='bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg w-1/5 font-bold'>Employee Name</h2>
                <h3 className='text-lg w-1/5 font-bold'>New Task</h3>
                <h5 className='text-lg w-1/5 font-bold'>Active Task </h5>
                <h5 className='text-lg w-1/5 font-bold'>Completed </h5>
                <h5 className='text-lg w-1/5 font-bold'>Failed </h5>
            </div>

        <div className='h-[80%]'>
            {authData.employees.map((elem)=>{

                return (<div className='bg-transparent border border-b-gray-50 mb-2 py-2 px-4 flex justify-between rounded overflow-auto'>
                    <h2 className='text-lg w-1/5 text-teal-500 font-bold'>{elem.firstName}</h2>
                    <h3 className='text-lg w-1/5 text-blue-600 font-bold'>{elem.taskNumber.newTask}</h3>
                    <h5 className='text-lg w-1/5 text-white font-bold'>{elem.taskNumber.active} </h5>
                    <h5 className='text-lg w-1/5 text-green-600 font-bold'>{elem.taskNumber.completed} </h5>
                    <h5 className='text-lg w-1/5 text-red-600 font-bold'>{elem.taskNumber.failed} </h5>
                </div>)
            })}
        </div>
        
    </div>
  )
}

export default AllTask