import React from "react";

const Radiobtn = () => {
  return (
    <>
      <div className="ml-3 mt-3">
        <label
          htmlFor="Input1"
          className="form-label inline-block mb-2 text-gray-500"
        >
          Set Priority
        </label>
        <div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-blue-200 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="Radio1"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="Radio1"
            >
              High
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-blue-200 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="Radio2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="Radio2"
            >
              Medium
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-blue-200 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="Radio3"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="Radio3"
            >
              Low
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Radiobtn;
