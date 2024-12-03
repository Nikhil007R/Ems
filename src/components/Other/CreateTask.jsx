import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e)=>{
    e.preventDefault();

    setTask({taskTitle, date, category, description, active:false, newTask:true, failed:false, completed: false})
    console.log(task)
    
    console.log("Task created")
    
    const data = JSON.parse(localStorage.getItem("employees"));
    
    data.forEach((element)=>{
      
      if(element.firstName === assignTo){
        element.tasks.push(task);
      }
    })
    localStorage.setItem(JSON.stringify(data))
    
    console.log(data)

    setTaskTitle("")
    setDate("")
    setAssignTo("")
    setCategory("")
    setDescription("")
  }

  return (
    <div className='mt-7 rounded p-5 bg-[#1C1C1C]'>
          <form 
          onSubmit={(e)=>{
            submitHandler(e);
          }}  
          className='flex flex-wrap w-full items-center justify-between'>
            <div className='w-1/2'>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                onChange={(e)=>{
                  setTaskTitle(e.target.value);
                }} 
                value={taskTitle}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text"  placeholder='Name your UI Design'/>
              </div>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                onChange={(e)=>{
                  setDate(e.target.value);
                }} 
                value={date}
                className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
          
              </div>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input
                onChange={(e)=>{
                  setAssignTo(e.target.value);
                }} 
                value={assignTo}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
              </div>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input
                onChange={(e)=>{
                  setCategory(e.target.value);
                }} 
                value={category}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
              </div>
            </div>

            <div className='w-2/5 flex flex-col items-start'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
              <textarea
              onChange={(e)=>{
                setDescription(e.target.value);
              }} 
              value={description}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols={50} rows={10}></textarea>
              <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-[80%]'>Create Task</button>
            </div>
            
          </form>
        </div>
  )
}

export default CreateTask