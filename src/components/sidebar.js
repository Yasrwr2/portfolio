import React from "react";
import "./sidebar.css";
import Avatar from "./avatar";
import mailIcon from "../images/email-white-24dp.svg";

const Sidebar = () => {
    return (
        <div className="sidebar fixed p-10 text-right">
            <Avatar />
            <div className="mt-10">
                <p className="m-0">Yasmin Abdullahi</p>
                <a className="text-white" href="mailto:abdullahi.ya@gmail.com">abdullahi.ya@gmail.com</a>
                <div className="flex justify-end mt-6">
                    <a href="mailto:abdullahi.ya@gmail.com">
                        <img src={mailIcon}></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
