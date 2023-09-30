import React, { FC, useState } from "react";
import "../App.css";

const UserSideBar = () => {
    const [presentTab, setPresentTab] =  useState('home'); 
    const [user, setUser] = useState('Last, First');
    
    return (
        <div>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="" style={{
    height: "40px",
    padding: "auto",
    width: "100vw",
  }}>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 pt-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-900 dark:border-gray-700" style={{justifyContent: "center", paddingTop: "10px", paddingBottom: "10px"}}>
        <li>
          <a href="/customer/products" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">See Products</a>
        </li>
        <li>
          <a href="/submitfeedback" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Submit Feedback</a>
        </li>
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up Again</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </div>
    );
}

export default UserSideBar;