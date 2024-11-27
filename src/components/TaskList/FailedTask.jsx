import React from 'react'

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h2>
        <h3 className="">{data.taskDate}</h3>
      </div>
      <h2 className="mt-5 font-semibold text-2xl">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="mt-3 "> 
        <button className="w-full">Failed</button>
      </div>
    </div>
  )
}

export default FailedTask