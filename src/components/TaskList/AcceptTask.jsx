import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 px-3 py-1 text-sm rounded">High</h2>
        <h3 className="">20 feb 2024</h3>
      </div>
      <h2 className="mt-5 font-semibold text-2xl">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
        incidunt! Ad, hic excepturi. Eaque, animi?
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">Mark as completed </button>
        <button  className="bg-red-500 py-1 px-2 text-sm">Mark as failed </button>
      </div>
    </div>
  );
};

export default AcceptTask;
