import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Logo = () => (
    <StaticImage
        src="../images/logo.png"
        alt="JGLP Logo"
        layout="fixed"
        width={120}
        placeholder="tracedSVG"
        className="absolute top-4 right-4" />
);


export default Logo;
