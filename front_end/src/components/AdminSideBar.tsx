import React, { FC, useState } from "react";
import "../App.css";
import Logo from "../assets/wellfare-logo.png"

const AdminSideBar = () => {
    const [presentTab, setPresentTab] =  useState('home'); 
    
    return (
        <aside className="flex flex-col justify-center align-middle p-4 w-1/5vw h-screen bg-slate-500 text-gray-100">
            <header className="flex flex-col align-middle justify-center text-center" >
                <img className="h-auto w-40 " id="wellfare-logo" src={Logo} alt="Wellfare Logo"/>
                <div className="text-gray-100 italic font-medium text-lg">{user}</div>
            </header>
            <nav className="flex flex-col p-2 text-white font-bold text-2xl">
                <a href='/admin/index' className="hover:text-slate-200 hover:cursor-pointer" id='home'>Home</a>
<<<<<<< HEAD
                <a href='' className="hover:text-slate-200 hover:cursor-pointer" id='sales'>Sales</a>
                <a href='' className="hover:text-slate-200 hover:cursor-pointer" id='feedback'>Feedback</a>
                <a href='' className="hover:text-slate-200 hover:cursor-pointer" id='customers'>Customers</a>
=======
                <a href='/admin/sales' className="hover:text-slate-200 hover:cursor-pointer" id='sales'>Sales</a>
                <a href='/admin/feedback' className="hover:text-slate-200 hover:cursor-pointer" id='feedback'>Feedback</a>
                <a href='/admin/customers' className="hover:text-slate-200 hover:cursor-pointer" id='customers'>Customers</a>
>>>>>>> addd0a9ef60814174a3e7787a482240fdbbde70d
            </nav>
        </aside>
    );
}

export default SideBar;