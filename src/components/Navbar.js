// import { useState } from 'react';
// import { FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const [isDashboardOpen, setIsDashboardOpen] = useState(false);

//   // Function to toggle dashboard visibility
//   const toggleDashboard = () => {
//     setIsDashboardOpen(!isDashboardOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Icon to toggle dashboard */}
//       <div className="relative">
//         <FaBars className="text-5xl text-white ml-3 mt-20" onClick={toggleDashboard} />
      
//         {/* Dashboard content */}
//         {isDashboardOpen && (
//           <div className="absolute left-0 mt-16 w-64 bg-white text-black p-4 z-10">
//             <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//             <ul>
//               <li>
//                 <a href="/profile">My Profile</a>
//               </li>
//               <li>
//                 <a href="/settings">Settings</a>
//               </li>
//               <li>
//                 <a href="/membership">Membership Management</a>
//               </li>
//               <li>
//                 <a href="/donation">Donation Management</a>
//               </li>
//               {/* Add more dashboard links here */}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Function to toggle dashboard visibility
  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className="relative">
      {/* Icon to toggle dashboard */}
      <div className="relative">
        {/* Use FaBars instead of RxDropdownMenu */}
        <FaBars className="text-2xl text-white left-0 mt-3 cursor-pointer" onClick={toggleDashboard} />
      
        {/* Dashboard content */}
        {isDashboardOpen && (
          <div className="absolute left-0 mt-1 w-64 bg-white text-black p-4 z-10">
            <h2 className="text-2xl font-bold mb-4">Temple Dashboard</h2>
            {/* Include temple dashboard content here */}
            {/* For example: */}
           
            <ul>
            <li>
              <a href="/profile">My Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a href="/membership">Membership Management</a>
            </li>
            <li>
              <a href="/donation">Donation Management</a>
            </li>
            {/* Add more dashboard links here */}
          </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

