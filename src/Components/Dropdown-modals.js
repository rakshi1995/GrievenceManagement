import React from "react";

export default function Dropdown() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="inline-flex items-center px-6 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
       ADD
       <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl px-4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
              
                {/*body*/}
                <div className=" p-6 flex-auto ">
                <div>
  <label for="grievances" class="block text-sm font-medium text-gray-700">Select Grievances</label>
  <select id="grievances" name="grievances" class="mt-4 border p-3 ">
    <option selected>Waste Not Collected</option>
    <option >Collected but WW mixed the segregated waste</option>
    <option>Waste around their property</option>
    <option>Others</option>
    <option>No Grievance</option>
  </select>
  
</div>
                </div>
               
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent border border-red-300 font-bold uppercase px-6 py-2.5 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   Submit
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