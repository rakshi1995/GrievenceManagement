import React from "react";
import Dropdown from "./Dropdown-modals";



export default function Table() {
  return (
    <>
      <div className=" py-28 px-4">
        <div className="lg:flex lg:items-center lg:justify-between lg:px-36 px-4 ">
          <div class="w-full sm:max-w-xs">
            <label for="search" class="sr-only">
              Search
            </label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                placeholder="search by "
                type="search"
              />
            </div>
          </div>
          <div className="flex gap-x-4 lg:pt-0 pt-4">
          {/* <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-500"
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
            </button> */}
            <Dropdown/>
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 border border-transparent text-base leading-4 font-medium rounded-md shadow-sm text-orange-500 bg-white hover:bg-orange-400 border-orange-500 hover:text-white "
            >
             No Grievance
            </button>
           
          </div>
        </div>
       {/* Table section */}
       <div className="px-4 sm:px-6 lg:px-8 ">
  <div className="sm:flex sm:items-center">
  </div>
  <div className="mt-8 flex flex-col">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-sky-900">
              <tr className="divide-x divide-gray-200">
                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pl-6">Sr.No.</th>
                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-100">Grievance No.</th>
                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-100">Property Id</th>
                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pr-6">Type</th>
                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pl-6">Mobile Number</th>
                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-100">Status</th>
                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-100">Comments</th>
                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pr-6">Reported At</th>
                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-100">Last Activity At</th>
                <th scope="col" className="py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-100 sm:pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="divide-x divide-gray-200">
                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">1</td>
                <td className="whitespace-nowrap p-4 text-sm text-gray-500">12345678</td>
                <td className="whitespace-nowrap p-4 text-sm text-gray-500">123456</td>
                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">type</td>
                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">915373838</td>
                <td className="whitespace-nowrap p-4 text-sm text-gray-500">pending</td>
                <td className="whitespace-nowrap p-4 text-sm text-gray-500" type="text">comment</td>
               
                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">Member</td>
                <td className="whitespace-nowrap p-4 text-sm text-gray-500">djkdlds</td>
                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6 text-center">view document
               <button>
            <a href="#" class="text-blue-600 text-lg hover:text-indigo-700 pl-4">Edit</a>
            </button>

                </td>
                
              </tr>

      
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
     
    </>
  );
}
