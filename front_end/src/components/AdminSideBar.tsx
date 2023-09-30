import React, { FC, useState } from "react";
import "../App.css";
import Logo from "../assets/wellfare-logo.png"

const AdminSideBar = () => {
    const [presentTab, setPresentTab] =  useState('home'); 
    const [user, setUser] = useState('User');
    const pages = ['home', 'sales', 'feedback', 'customers'];
    
    const updatePresentPage = () => {
        document.querySelector("#sales").classList.add('underline');
        
    } 

    return (
        <aside className="flex flex-col justify-center align-middle p-4 w-1/5vw h-screen bg-slate-500 text-gray-100">
            <header className="flex flex-col align-middle justify-center text-center" >
                <img className="h-auto w-40" id="wellfare-logo" src={Logo} alt="Wellfare Logo"/>
                <div className="text-gray-100 italic font-medium lg:text-lg sm: text-sm">{user}</div>
            </header>
            <nav className="flex flex-col p-2 text-white font-bold lg:text-2xl sm:sm ">
                <a href='/admin/index' className="hover:text-slate-200 hover:cursor-pointer underline" id='home'>Home</a>
                <a onClick={updatePresentPage} href='/admin/sales' className="hover:text-slate-200 hover:cursor-pointer" id='sales'>Sales</a>
                <a href='/admin/feedback' className="hover:text-slate-200 hover:cursor-pointer" id='feedback'>Feedback</a>
                <a href='/admin/customers' className="hover:text-slate-200 hover:cursor-pointer" id='customers'>Customers</a>
            </nav>
        </aside>
    );
}

export default AdminSideBar;