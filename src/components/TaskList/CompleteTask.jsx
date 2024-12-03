import { data } from "autoprefixer";
import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-zinc-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h2>
        <h3 className="">{data.taskDate}</h3>
      </div>
      <h2 className="mt-5 font-semibold text-2xl">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="mt-4 "> 
        <button className="w-full bg-green-600 text-white text-sm rounded-md px-1 py-1">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
