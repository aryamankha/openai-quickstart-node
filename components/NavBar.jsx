import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6 w-full">
     <div className="flex items-center flex-shrink-0 text-white mr-6">
       <span className="font-semibold text-xl tracking-tight">My App</span>
     </div>
     <div className="block lg:hidden">
       <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
         <svg
           className="fill-current h-3 w-3"
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <title>Menu</title>
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
       </button>
     </div>
     <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
       <div className="text-sm lg:flex-grow">
         <Link
           href="/"
           className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
         >
           Home
         </Link>
         <Link
           href="/about"
           className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
         >
           About
         </Link>
       </div>
     </div>
    </nav>
  );
};

export default NavBar;
