import React from "react";

const Toast = (props) => {
  return (
    <>
      <div
        id="toast-undo"
        className={`flex items-center rounded-sm w-40 ml-3 mt-2 mr-3 border mb-2 text-${props.color}-500 bg-${props.color}-100 `}
        role="alert">
        <div className="text-xs font-normal ml-3">{props.name}</div>
        <div className="flex items-center ml-auto">
          <button
            type="button"
            className="text-gray-400 rounded-sm p-1.5 inline-flex"
            data-dismiss-target="#toast-undo"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default Toast;
