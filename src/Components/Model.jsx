import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-white bg-orange-600 font-bold text-sm px-5 py-3 rounded-lg outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + Add New Task
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Task</h3>
                </div>
                <div class="grid grid-flow-col">
                  <div class="col-span-4 border">
                    <div class="flex justify-center">
                      <div class="mb-1 ml-3 mr-2">
                        <label
                          htmlFor="Input1"
                          class="form-label inline-block mb-2 text-gray-700"
                        >
                          Task Name
                        </label>
                        <input
                          type="text"
                          class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                          placeholder="Get Appointment Letter from HR"
                          id="Input1"
                        />
                      </div>
                    </div>


                    <div class="flex justify-center">
                      <div class="mb-1 ml-3 mr-2">
                        <label
                          htmlFor="Textarea1"
                          class="form-label inline-block mb-2 text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                          id="Textarea1"
                          rows="3"
                          placeholder="Write Description"
                        ></textarea>
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <div class="mb-1 ml-3 mr-2">
                        <label
                          htmlFor="Input1"
                          class="form-label inline-block mb-2 text-gray-700"
                        >
                          Related To
                        </label>
                        <input
                          type="text"
                          class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                          placeholder="HR Department"
                          id="Input1"
                        />
                      </div>
                    </div>

                  </div>

                  <div class="col-span-4 border">vwvwr</div>
                  <div class="col-span-4">
                  <div class="flex justify-center">
                      <div class="mb-1 ml-3 mr-2">
                        <label
                          htmlFor="Input1"
                          class="form-label inline-block mb-2 text-gray-700"
                        >
                          Set Deadline
                        </label>
                        <input
                          type="date"
                          class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                          placeholder="Date"
                          id="Input1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancle
                  </button>
                  <button
                    className="bg-orange-500 text-white font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
