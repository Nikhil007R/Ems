import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto mt-10 py-7 flex gap-5 items-center justify-start flex-nowrap'>

        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
        })}
        
        {/* <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h2>
                <h3 className=''>20 feb 2024</h3>
            </div>
            <h2 className='mt-5 font-semibold text-2xl'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt! Ad, hic excepturi. Eaque, animi?
            </p>
        </div> */}
        
    </div>
  )
}

export default TaskList