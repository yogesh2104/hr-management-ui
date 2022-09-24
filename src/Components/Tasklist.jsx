import React from "react";
import Table from "./Table";

const Tasklist = () => {
  return (
    <>
      <div className="rounded-lg shadow-md bg-white w-100 mt-5">
        <div className="grid grid-flow-col">
          <div className="col-span-4 py-3 px-6">Tasks</div>
          <div className="col-span-4 flex justify-end mr-4 mt-2">
            <div className="bg-gray-400 px-4 py-1 mb-1 rounded-md">
              <ul className="flex flex-wrap text-sm font-medium text-center">
                <li className="">
                  <a
                    href="#!"
                    className="inline-block py-3 px-4 bg-white active rounded-md"
                    aria-current="page"
                  >
                    Tab 1
                  </a>
                </li>
                <li className="">
                  <a
                    href="#!"
                    class="inline-block py-3 px-4 active:bg-white rounded-md"
                  >
                    Tab 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form className="ml-4">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium sr-only"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
              placeholder="Search Tasks"/>
          </div>
        </form>
        <Table/>
      </div>
    </>
  );
};
export default Tasklist;
