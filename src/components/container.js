import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./container.css";
import Avatar from './avatar';
import mailIcon from "../images/email-white-24dp.svg";
import Trail from './trail';

const Container = () => {
    return (
        <div className="content mx-auto md:mr-0 relative">
            <div className="welcome md:hidden">
                <div className="mt-20">
                    <Avatar style={{ borderRadius: '50%' }} />
                </div>
                <div className="mt-10">
                    <p className="m-0 text-center">Yasmin Abdullahi</p>
                    <a className="block text-center" href="mailto:yasminabdullahi98@gmail.com">yasminabdullahi98@gmail.com</a>
                </div>
            </div>
            <div className="hidden md:block h-screen">
                <div className="grid">
                    <StaticImage
                        src="../images/bg.jpg"
                        alt=""
                        style={{
                            gridArea: "1/1",
                            maxHeight: 300,
                        }}
                        layout="fullWidth"
                        placeholder="tracedSVG"
                        transformOptions={{grayscale: true}} />

                    <div
                        style={{
                            // By using the same grid area for both, they are stacked on top of each other
                            gridArea: "1/1",
                            position: "relative",
                            // This align the other elements left inside the hero component
                            placeItems: "flex-start",
                            display: "grid",
                        }}
                    >
                        <Trail>
                            <span>Jung.</span>
                            <span>Grün.</span>
                            <span>Liberal.</span>
                        </Trail>
                    </div>




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
