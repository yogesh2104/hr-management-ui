import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
const Tasks = () => {
  return (
    <>
      <div class="rounded-lg shadow-md bg-white w-full">
              <div class="py-3 px-6 border-b border-gray-300">Tasks
              <p class="mt-0 flex justify-end">
                &#60;<FaCalendarAlt className="mt-1 m-2"/> May 9,2022 &#62;
              </p>
              </div>
              <div class="p-6 grid grid-flow-col gap-2">
                <div type="button" class="inline-block px-3 py-3 bg-yellow-600 text-white text-lg leading-tight rounded shadow-md hover:shadow-lg">
                  66 <br/>Ongoing
                </div>
                <div
                  type="button"
                  class="inline-block px-3 py-3 text-lg bg-red-600 text-white leading-tight rounded shadow-md hover:shadow-lg">
                  24<br/>Delayed
                </div>
                <div
                  type="button"
                  class="inline-block px-3 py-3 bg-green-500 text-white text-lg leading-tight rounded shadow-md  hover:shadow-lg"
                >
                  10<br/>Completed
                </div>
                <div
                  type="button"
                  class="inline-block px-3 py-3 bg-cyan-600 text-white text-lg leading-tight rounded shadow-md hover:shadow-lg"
                >
                  100<br/> Total Assigned
                </div>
              </div>
            </div>
    </>
  );
};
export default Tasks;
