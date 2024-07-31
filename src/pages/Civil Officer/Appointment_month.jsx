// import React from "react";

// const AppointmentMonth = () => {
//     return(
//     // <div>
//     //     <p>test
//     //     </p>
//     //     <h2>test</h2>
//     // </div>

//     <div className="container mx-auto mt-10">
//     <div className="wrapper bg-white rounded shadow w-full ">
//       <div className="header flex justify-between border-b p-2">
//         <span className="text-lg font-bold">
//           2020 July
//         </span>
//         <div className="buttons">
//           <button className="p-1">
//               <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                 <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
//                 <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
//               </svg>
//           </button>
//           <button className="p-1">
//               <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                 <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
//                 <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
//               </svg>
//           </button>
//         </div>
//       </div>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//               <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
//               <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
//             </th>
//             <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//               <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
//               <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
//             </th>
//             <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//               <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
//               <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
//             </th>
//             <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//               <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
//               <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
//             </th>
//             <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//               <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
//               <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
//             </th>
//             <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//               <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
//               <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
//             </th>
//             <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
//               <span className="xl:block lg:block md:block sm:block hidden">Saturday</span>
//               <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="text-center h-20">
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">1</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
//                   <div
//                     className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
//                   >
//                     <span className="event-name">
//                       Meeting
//                     </span>
//                     <span className="time">
//                       12:00~14:00
//                     </span>
//                   </div>
//                   <div
//                     className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
//                   >
//                     <span className="event-name">
//                       Meeting
//                     </span>
//                     <span className="time">
//                       18:00~20:00
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">2</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">3</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div classNameName="top h-5 w-full">
//                   <span className="text-gray-500">4</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">6</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">7</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
//                   <div
//                     className="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
//                   >
//                     <span className="event-name">
//                       Shopping
//                     </span>
//                     <span className="time">
//                       12:00~14:00
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500 text-sm">8</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//           </tr>

//           <!--         line 1 -->
//           <tr className="text-center h-20">
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">9</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">10</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">12</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">13</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">14</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">15</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500 text-sm">16</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//           </tr>
//           <!--         line 1 -->

//           <!--         line 2 -->
//           <tr className="text-center h-20">
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">16</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">17</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">18</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">19</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">20</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">21</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500 text-sm">22</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//           </tr>
//           <!--         line 2 -->

//           <!--         line 3 -->
//           <tr className="text-center h-20">
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">23</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">24</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">25</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">26</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">27</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">28</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500 text-sm">29</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//           </tr>
        
//           <tr className="text-center h-20">
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">30</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">31</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//                 <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                   <div className="top h-5 w-full">
//                     <span className="text-gray-500">1</span>
//                   </div>
//                   <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//                 </div>
//               </td>
//             <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">2</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">3</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500">4</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//             <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
//               <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
//                 <div className="top h-5 w-full">
//                   <span className="text-gray-500 text-sm">5</span>
//                 </div>
//                 <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
//               </div>
//             </td>
//           </tr>
          
//         </tbody>
//       </table>
//     </div>
//   </div>

//     );
// };




import React, {useState, useEffect} from "react";
import { Button, Flex, Text } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AppointmentMonth = () => {

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const handlePreviousMonth = () =>{
        setMonth(prevMonth => {
            if (prevMonth === 0) {
              setYear(prevYear => prevYear - 1);
              return 11;
            }
            return prevMonth - 1;
          });

    };

    const handleNextMonth = () => {
        setMonth(prevMonth => {
          if (prevMonth === 11) {
            setYear(prevYear => prevYear + 1);
            return 0;
          }
          return prevMonth + 1;
        });
      };
    

    const daysInMonth = new Date(2020, 7, 0).getDate();
  const events = {
    2: [{ name: "New", time: "4" }, { name: "Meeting", time: "18:00~20:00" }],
    5: [{ name: "Follow-Up", time: "12" }],
    6: [{ name: "Follow-Up", time: "14" }],
    9: [{ name: "New", time: "03" }, { name: "Follow-Up", time: "05" }],
    12: [{ name: "New", time: "06" }, { name: "Follow-Up", time: "10" }],
    13: [{ name: "Rescheduled", time: "02" }, { name: "New", time: "02" }],
    17: [{ name: "New", time: "10" }],
    19: [{ name: "New", time: "05" }, { name: "Follow-Up", time: "03" }, { name: "Meeting", time: "15:00~15:30" }],
    23: [{ name: "New", time: "02" }],
    24: [{ name: "New", time: "01" }, { name: "Follow-Up", time: "02" }, { name: "Rescheduled", time: "03" }],
    25: [{ name: "Follow-Up", time: "10" }],
    26: [{ name: "Rescheduled", time: "02" }, { name: "New", time: "03" }],
    29: [{ name: "New", time: "10" }, { name: "Rescheduled", time: "01" }]
  };

  const renderDays = () => {
    const rows = [];
    let cells = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = events[day] || [];
      cells.push(
        <td
          key={day}
          className="border p-1 h-24 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 border border-blue-100"
        >
          <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div className="top h-5 w-full">
              <span className="text-gray-500">{day}</span>
            </div>
            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
              {dayEvents.map((event, index) => (
                <div key={index} className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 mt-2">
                  <span className="event-name mr-2">{event.name}</span>
                  <span className="time">{event.time}</span>
                </div>
              ))}
            </div>
          </div>
        </td>
      );
      if (day % 7 === 0 || day === daysInMonth) {
        rows.push(<tr key={day} className="text-center h-16">{cells}</tr>);
        cells = [];
      }
    }
    return rows;
};

    return(
        <div className="">
        <div className="">
          <Flex align="center" justify="center" my={4}>
            {/* <Button leftIcon={<FaChevronLeft />} variant="outline" mr={2} />
            <Text fontSize="lg" fontWeight="bold">
              May
            </Text>
            <Button rightIcon={<FaChevronRight />} variant="outline" ml={2} /> */}

        <Button onClick={handlePreviousMonth} leftIcon={<FaChevronLeft />} variant="outline" mr={2} />
          <Text fontSize="lg" fontWeight="bold">
            {monthNames[month]} {year}
          </Text>
          <Button onClick={handleNextMonth} rightIcon={<FaChevronRight />} variant="outline" ml={2} />

          </Flex>
        </div>

        <div className="bg-green-400">
        <div className="calendar-container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full border border-blue-100">
        <div className="header flex justify-between border-b p-2">
          <span className="text-lg font-bold">2024 July</span>
          <div className="buttons">
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-circle"
                // fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fillRule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z" />
                <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z" />
              </svg>
            </button>
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle"
                // fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fillRule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
                <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
        </div>
        <table className="w-full border border-blue-100">
          <thead>
            <tr>
              {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
                <th
                  key={index}
                  className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs border border-blue-100"
                >
                  <span className="xl:block lg:block md:block sm:block hidden">{day}</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">{day.slice(0, 3)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderDays()}</tbody>
        </table>
      </div>
    </div>
        </div>
       
      </div>
    );
};
    






export default AppointmentMonth;


