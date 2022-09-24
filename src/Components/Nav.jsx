import React from "react";

const Nav=()=>{
    return(
        <>
        <nav class="bg-white shadow-sm">
        <div class=" px-4">
          <div class="flex justify-between">
            <div class="flex space-x-1">
                <div class="flex items-center text-5xl py-4 px-2 ml-3">
                  <p>CAIT</p>
                  <span class="font-semibold text-gray-500 text-lg ml-28">
                    My Apps &#62; <span className="text-green-400">Tasks</span>
                  </span>
                </div>
            </div>
            <div class="flex items-center space-x-5 m-4">
              <img
                src="/bell.svg"
                alt="myApps"
                width="30px"
                className="bg-gray-200 absolute p-2 rounded-full "
              />
              <span class="relative top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
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