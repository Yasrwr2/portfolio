import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import { StaticImage } from 'gatsby-plugin-image';

const Avatar = ({ style }) => (
  <StaticImage
    src="../images/profil.jpg"
    alt="Yasmin Abdullahi Profilfoto"
    width={160}
    aspectRatio={1}
    imgStyle={style}
    placeholder={"blurred"} />
);

export default Avatar;
