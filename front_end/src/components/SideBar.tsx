import React, { FC, useState } from "react";
import "../App.css";
// import Logo from "../../public/wellfare-logo.png";

const SideBar = () => {
    const [presentTab, setPresentTab] =  useState('home'); 
    const [user, setUser] = useState('Last, First');
    
    return (
        <aside className="flex flex-col justify-center align-middle p-5 h-screen bg-slate-500 text-gray-100">
            <header className="flex flex-col align-middle justify-center text-center" >
               {/* <Logo />  */}
               <div id="wellfare-logo">Logo goes here</div>
               <div className="text-gray-100 italic font-medium">{user}</div>
            </header>
            <nav className="flex flex-col p-2 text-white font-bold text-2xl">
                <a className="hover:text-slate-200 hover:cursor-pointer" id='home'>Home</a>
                <a className="hover:text-slate-200 hover:cursor-pointer" id='sales'>Sales</a>
                <a className="hover:text-slate-200 hover:cursor-pointer" id='feedback'>Feedback</a>
                <a className="hover:text-slate-200 hover:cursor-pointer" id='customers'>Customers</a>
            </nav>
        </aside>
    );
}

export default SideBar;