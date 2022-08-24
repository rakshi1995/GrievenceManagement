
import React from "react";

export default function AddForm() {
    return(
        <div className="bg-gray-400  justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" action="#" method="POST">
            <div className="col-span-3 sm:col-span-3">
                <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">
                  Select Grievences
                </label>
                <select
                  id="Complaint"
                  name="Complaint"
                  autoComplete="Complaint-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Waste Not Collected</option>
                  <option>Collected but WW mixed the segregated Waste</option>
                  <option>Waste around their property</option>
                  <option>Others</option>
                </select>
                <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                   Other Grievences
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="other"
                        name="other"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Other Grievences"
                        defaultValue={''}
                      />
                    </div>
              </div>
            </div>  </form>
        </div>
        
    )
}