import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const Avatar = () => {
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

  const style = { borderRadius: '50%', display: 'block', marginLeft: 'auto' }

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }


    return (
        <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        style={style} />
    );
}

export default Avatar;
