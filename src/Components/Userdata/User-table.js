import React from "react";
import "./style.css";
export default function user() {
  return (
    <>
      <div className="flex justify-center pt-10">
        {" "}
        <img src="/logo.png"></img>
      </div>

    
<div className="bg-white p-8 rounded-md w-full">
	<div className=" flex items-center justify-between pb-6">
		<div>
			
			<span className="text-xs">user</span>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
          </div>
				<div className="lg:ml-40 ml-10 space-x-8">
					<button className="bg-purple-800 hover:bg-purple-700 px-8 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">ADD</button>
					
				</div>
			</div>
		</div>
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
              <th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase">
									Sr.No.
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
									Grievance No.
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
									Property Id
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
									Type
								</th>
                <th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
									Mobile Number
								</th>
                
                <th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
Status								</th>
                <th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
Comments
								</th>
                <th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
									Reported At
 
								</th>
                <th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
Last Activity At
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-violet-500 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="">
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									
												<p className="text-gray-900 whitespace-no-wrap">
													1
												</p>
											
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">648383899</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										93654378487
									</p>
								</td>
								
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">Activo</span>
									</span>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										comment
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<button className='border-purple-800 px-3 py-1 border hover:bg-purple-700 hover:text-white' >Edit</button>
										
									
								</td>
							</tr>
							<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									
												<p className="text-gray-900 whitespace-no-wrap">
													1
												</p>
											
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">648383899</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										93654378487
									</p>
								</td>
								
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">Activo</span>
									</span>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										comment
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<button className='border-purple-800 px-3 py-1 border hover:bg-purple-700 hover:text-white' >Edit</button>
										
									
								</td>
							</tr>
							<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									
												<p className="text-gray-900 whitespace-no-wrap">
													1
												</p>
											
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">648383899</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										93654378487
									</p>
								</td>
								
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">Activo</span>
									</span>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										comment
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<button className='border-purple-800 px-3 py-1 border hover:bg-purple-700 hover:text-white' >Edit</button>
										
									
								</td>
							</tr>
							<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									
												<p className="text-gray-900 whitespace-no-wrap">
													1
												</p>
											
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">648383899</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										12746
									</p></td>
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										93654378487
									</p>
								</td>
								
								<td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">Activo</span>
									</span>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										comment
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-purple-100 text-sm">
									<button className='border-purple-800 px-3 py-1 border hover:bg-purple-700 hover:text-white' >Edit</button>
										
									
								</td>
							</tr>
						</tbody>
					</table>
					<div
						className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
						<div className="inline-flex mt-2 xs:mt-0">
							<button
                                className="text-sm text-indigo-50 transition duration-150 hover:bg-purple-500 bg-purple-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
                                className="text-sm text-indigo-50 transition duration-150 hover:bg-purple-500 bg-purple-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  );
}
