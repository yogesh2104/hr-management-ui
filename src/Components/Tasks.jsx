import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
const Tasks = () => {
  return (
    <>
      <div className="rounded-lg shadow-md bg-white w-full">
        <div class="grid grid-flow-col border-b border-gray-200">
          <div class="col-span-4 py-3 px-6">Tasks</div>
          <div class="col-span-4 flex justify-end mr-4 mt-2">
          <span className="bg-gray-400 w-7 h-7 flex justify-center rounded-full">&#60;</span><FaCalendarAlt className="mt-1 m-2"/> May 9,2022<span className="bg-gray-400 w-7 h-7 flex justify-center rounded-full ml-2">&#62;</span>
          </div>
        </div>
        <div className="p-6 grid grid-flow-col gap-2">
          <div
            type="button"
            className="inline-block px-3 py-3 bg-yellow-600 text-white text-lg leading-tight rounded shadow-md hover:shadow-lg"
          >
            66 <br />
            Ongoing
          </div>
          <div
            type="button"
            className="inline-block px-3 py-3 text-lg bg-red-600 text-white leading-tight rounded shadow-md hover:shadow-lg"
          >
            24
            <br />
            Delayed
          </div>
          <div
            type="button"
            className="inline-block px-3 py-3 bg-green-500 text-white text-lg leading-tight rounded shadow-md  hover:shadow-lg"
          >
            10
            <br />
            Completed
          </div>
          <div
            type="button"
            className="inline-block px-3 py-3 bg-cyan-600 text-white text-lg leading-tight rounded shadow-md hover:shadow-lg"
          >
            100
            <br /> Total Assigned
          </div>
        </div>
      </div>
    </>
  );
};
export default Tasks;
