import React from "react";
import "./sidebar.css";
import Avatar from "./avatar";

const Sidebar = () => {
    return (
        <div className="sidebar fixed p-4 pt-8 text-right">
            <Avatar /> 
            <p>Yasmin Abdullahi</p>
            <p>Herzlich Willkommen</p>
        </div>
    );
}

export default Sidebar;
