import React from "react";
import "./container.css";
import Avatar from './avatar';
import mailIcon from "../images/email-white-24dp.svg";
import Trail from './trail';

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
                <div className="header">
                    <Trail>
                        <span>Jung.</span>
                        <span>Grün.</span>
                        <span>Liberal.</span>
                    </Trail>
                    <div className="background-img"></div>
                </div>
                <nav>
                    <p>Über mich</p>
                    <p>Meine Politik</p>
                    <p>In den Medien</p>
                </nav>


            </div>
        </div>
    );
}

export default Container;
