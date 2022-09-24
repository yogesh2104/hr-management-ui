import React from "react";
import Toast from "./Toast";

const Modelassignto = () => {
  return (
    <>
      <div className="mb-1 ml-3 mr-2">
        <label
          htmlFor="Input1"
          className="form-label inline-block mb-2 text-gray-500"
        >
          Assign To
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded
                transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white border-cyan-700 focus:outline-cyan-700"
          placeholder="Vish "
          id="Input1"
        />
      </div>
      <Toast name="Gautam Sharma" color="cyan"/>
      <Toast name="Harshad Joshi"/>
      <Toast name="Kavish Sen"/>
    </>
  );
};
export default Modelassignto;
