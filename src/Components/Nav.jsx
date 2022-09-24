import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className=" px-4">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div class="relative flex items-center py-4 px-2 ml-3">
                <span className="text-5xl">CAIT</span>
                <div class="absolute bottom-0 left-0 text-xs ml-3">EDUSYS Pvt. Ltd.</div>
              
              <span className="font-semibold text-gray-500 text-lg ml-32">
                My Apps &#62; <span className="text-green-400">Tasks</span>
              </span>
              </div>
            </div>
            <div className="flex items-center space-x-5 m-4">
              <img
                src="/bell.svg"
                alt="myApps"
                width="30px"
                className="bg-gray-200 absolute p-2 rounded-full "
              />
              <span className="relative top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
              <img
                src="/user.svg"
                alt="myApps"
                width="30px"
                className="bg-gray-200 p-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
