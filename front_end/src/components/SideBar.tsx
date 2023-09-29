import React, { FC } from "react";
import "../App.css";
// import Logo from "../../public/wellfare-logo.png";

const SideBar = () => {
    return (
        <aside className="flex flex-col p-5">
            <div id="wellfare-logo">
               {/* <Logo />  */}
            </div>
            <nav className="flex flex-col bg-blue-400">
                <a>Home</a>
                <a>Sales</a>
                <a>Feedback</a>
                <a>Customers</a>
            </nav>
        </aside>
    );
}

export default SideBar;