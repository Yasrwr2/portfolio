import React from "react";
import "./container.css";
import Avatar from './avatar';
import Hero from './hero';

const Container = () => {
    return (
        <div className="content mx-auto md:mr-0 relative">
            <div className="welcome md:hidden">
                <div className="mt-20 text-center">
                    <Avatar style={{ borderRadius: '50%' }} />
                </div>
                <div className="mt-10">
                    <p className="m-0 text-center">Yasmin Abdullahi</p>
                    <a className="block text-center" href="mailto:yasminabdullahi98@gmail.com">yasminabdullahi98@gmail.com</a>
                </div>
            </div>
            <div className="hidden md:block h-screen">
                <Hero />
                <div className="mt-8 ml-8">
                    <h1 className="text-4xl font-thin mb-3">Yasmin Abdullahi</h1>
                    <p>Stadträtin Bern, Jung Grün Liberale</p>
                </div>
            </div>
        </div>
    );
}

export default Container;
