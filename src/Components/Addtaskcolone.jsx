import React from "react";

const Addtaskcolone=()=>{
    return(
        <>
        <div className="col-span-4 border">
                    <div className="flex justify-center">
                      <div className="mb-1 ml-3 mr-2">
                        <label
                          htmlFor="Input1"
                          className="form-label inline-block mb-2 text-gray-500"
                        >
                          Task Name
                        </label>
                        <input
                          type="text"
                          className="
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

                    <div className="flex justify-center">
                      <div className="mb-1 ml-3 mr-2">
                        <label
                          htmlFor="Textarea1"
                          className="form-label inline-block mb-2 text-gray-500"
                        >
                          Description
                        </label>
                        <textarea
                          className="
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
                    <div className="flex justify-center">
                      <div className="mb-1 ml-3 mr-2">
                        <label
                          htmlFor="Input1"
                          className="form-label inline-block mb-2 text-gray-500"
                        >
                          Related To
                        </label>
                        <input
                          type="text"
                          className="
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
        </>
    )

}
export default Addtaskcolone;