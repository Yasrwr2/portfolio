import React from "react";
import "./container.css";
import Avatar from './avatar';
import mailIcon from "../images/email-white-24dp.svg";

const Container = () => {
    return (
        <div className="content mx-auto md:mr-0 relative">
            <div className="welcome md:hidden">
                <div className="mt-20">
                    <Avatar style={{ borderRadius: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                </div>
                <div className="mt-10">
                    <p className="m-0 text-center">Yasmin Abdullahi</p>
                    <a className="block text-center" href="mailto:yasminabdullahi98@gmail.com">yasminabdullahi98@gmail.com</a>
                </div>
            </div>
            <div className="hidden md:block h-screen">
                <div className="coming-soon">
                    <p className="text-center text-4xl text-gray-500 m-0">Kommt in Kürze</p>
                </div>
            </div>
        </div>
    );
}

export default Container;
