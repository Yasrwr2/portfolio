import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Trail from './trail';

const Hero = () => (
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
      transformOptions={{ grayscale: true }}
    />

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
)

export default Hero
