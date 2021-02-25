import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const LogoImg = ({ style }) => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 120) {
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
        alt="Logo JGLP" />
    );
}

export default LogoImg;
