import React from "react";
import "./sidebar.css";
import Avatar from "./avatar";
import mailIcon from "../images/email-white-24dp.svg";

const Sidebar = () => {
    return (
        <div className="sidebar fixed p-10 text-right hidden md:block">
            <Avatar style={{ borderRadius: '50%', display: 'block', marginLeft: 'auto' }} />
            <div className="mt-10">
                <h1 className="text-base text-white font-normal m-0">Yasmin Abdullahi</h1>
                <a className="text-white" href="mailto:yasminabdullahi98@gmail.com">yasminabdullahi98@gmail.com</a>
                <div className="flex justify-end mt-4">
                    <a href="mailto:yasminabdullahi98@gmail.com">
                        <img src={mailIcon}></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
