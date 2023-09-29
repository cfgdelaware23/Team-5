import React, { FC } from "react";
import "../App.css";
// import Logo from "../../public/wellfare-logo.png";

const SideBar = () => {
    return (
        <aside className="flex flex-col justify-center align-middle p-5 h-full">
            <div id="wellfare-logo">
               {/* <Logo />  */}
               Logo
               <br></br>
               *User's Name*
            </div>
            <nav className="flex flex-col bg-red-500">
                <a>Home</a>
                <a>Sales</a>
                <a>Feedback</a>
                <a>Customers</a>
            </nav>
        </aside>
    );
}

export default SideBar;