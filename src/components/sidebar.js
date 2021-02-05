import React from "react";
import "./sidebar.css";
import Avatar from "./avatar";

const Sidebar = () => {
    return (
        <div className="sidebar fixed p-10 text-right">
            <Avatar />
            <div className="mt-10">
            <p>Hey, Ich bin <strong>Yasmin Abdullahi</strong></p>
            <a className="text-white" href="mailto:yasmin.abdullahi@gmail.com">yasmin.abdullahi@gmail.com</a>
            <p>JGLP</p>
            </div>
        </div>
    );
}

export default Sidebar;
