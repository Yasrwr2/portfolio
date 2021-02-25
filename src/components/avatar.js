import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const Avatar = ({ style }) => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profil.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }


    return (
        <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        style={style}
        alt="Profilbild Yasmin Abdullahi" />
    );
}

export default Avatar;
