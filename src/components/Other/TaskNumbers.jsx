import React from 'react'

const TaskNumbers = () => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium '>New Task</h2>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium '>New Task</h2>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium '>New Task</h2>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium '>New Task</h2>
        </div>
    </div>
  )
}

export default TaskNumbers