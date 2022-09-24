import React from "react";
import Tasks from "../Components/Tasks";
import Model from "./Model";
import Nav from "./Nav";
const Home = () => {
  // const openModel=()=>{
  //   <Model/>
  // }
  return (
    <>
    <Nav/>
      <div className="grid grid-flow-col">
        <div className="col-span-2">
          <div className="w-60 h-96 shadow-md bg-white px-1 absolute">
            <ul className="relative mb-4">
              <li className="relative mt-4">
                <a
                  className="flex items-center text-yellow-400 text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <img
                    src="/apps.svg"
                    alt="myApps"
                    width="20px"
                    className="mr-2"
                  />
                  My Apps
                </a>
              </li>
              <li className="relative mt-4">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-yellow-500 text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <img
                    src="/users2.svg"
                    alt="myApps"
                    width="20px"
                    className="mr-2"
                  />
                  Resources
                </a>
              </li>
              <li className="relative mt-4">
                <a
                  className=" mt-20 flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <img
                    src="/home.svg"
                    alt="myApps"
                    width="20px"
                    className="mr-2"
                  />
                  My Orginasation
                </a>
              </li>
              <li className="relative mt-4">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <img
                    src="/settings.svg"
                    alt="myApps"
                    width="20px"
                    className="mr-2"
                  />
                  Settings
                </a>
              </li>
              <li className="relative mt-4">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <img
                    src="/sign-out-alt.svg"
                    alt="myApps"
                    width="20px"
                    className="mr-2"
                  />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4">
          <div className="ml-20 mt-6">
            <Tasks/>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex justify-center mt-5">
            <Model/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
