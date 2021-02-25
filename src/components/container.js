import React from "react";
import "./container.css";
import Avatar from './avatar';
import mailIcon from "../images/email-white-24dp.svg";

const Container = () => {
    return (
        <div className="content mx-auto md:mr-0 relative">
            <div className="welcome md:hidden">
                <div className="mt-12">
                    <Avatar style={{ borderRadius: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                </div>
                <div className="mt-10">
                    <p className="m-0 text-center">Yasmin Abdullahi</p>
                    <a className="block text-center" href="mailto:abdullahi.ya@gmail.com">abdullahi.ya@gmail.com</a>
                    <div className="flex justify-end mt-6">
                        <a href="mailto:abdullahi.ya@gmail.com">
                            <img src={mailIcon}></img>
                        </a>
                    </div>
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
