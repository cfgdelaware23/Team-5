import React, { FC, useState } from "react";
import "../App.css";
import Logo from "../assets/wellfare-logo.png"

const AdminSideBar = () => {
    const [presentTab, setPresentTab] =  useState('home'); 
    const [user, setUser] = useState('Last, First');
    
    return (
        <aside style={{backgroundColor: 'rgb(233, 188, 139)'}} className="flex flex-col justify-center align-middle p-4 w-1/5vw h-screen bg-slate-500 text-gray-100">
            <header className="flex flex-col align-middle justify-center text-center" >
                <img className="h-auto w-40 " id="wellfare-logo" src={Logo} alt="Wellfare Logo"/>
                <div className="text-gray-100 italic font-medium text-lg">{user}</div>
            </header>
            <nav style={{color: 'black'}} className="flex flex-col p-2 text-white font-bold text-2xl">
                <a className="hover:text-slate-200 hover:cursor-pointer" id='home'>Home</a>
                <a className="hover:text-slate-200 hover:cursor-pointer" id='sales'>Sales</a>
                <a className="hover:text-slate-200 hover:cursor-pointer" id='feedback'>Feedback</a>
                <a className="hover:text-slate-200 hover:cursor-pointer" id='customers'>Customers</a>
            </nav>
        </aside>
    );
}

export default AdminSideBar;