import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "bulma/css/bulma.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import listingData from "../listing.json"

const IndexPage = () => {
  let { data } = listingData;
  // flatten the data for easy access
  const listingDataMapped = data.map(element => {
    let obj = element.attributes;
    return {
      'id': element.id,
      ...obj
    };
  });

  // ideally below should be in a loop, not hardcoded
  const qlData = useStaticQuery(graphql`
    query {
      image1:  file(relativePath: { eq: "Mask Group 1.png" })    { ...fixedImage }
      image2:  file(relativePath: { eq: "Mask Group 1-1.png" })  { ...fixedImage }
      image3:  file(relativePath: { eq: "Mask Group 1-2.png" })  { ...fixedImage }
      image4:  file(relativePath: { eq: "Mask Group 1-3.png" })  { ...fixedImage }
      image5:  file(relativePath: { eq: "Mask Group 1-4.png" })  { ...fixedImage }
      image6:  file(relativePath: { eq: "Mask Group 1-5.png" })  { ...fixedImage }
      image7:  file(relativePath: { eq: "Mask Group 1-6.png" })  { ...fixedImage }
      image8:  file(relativePath: { eq: "Mask Group 1-7.png" })  { ...fixedImage }
      image9:  file(relativePath: { eq: "Mask Group 1-8.png" })  { ...fixedImage }
      image10: file(relativePath: { eq: "Mask Group 1-9.png" })  { ...fixedImage }
      image11: file(relativePath: { eq: "Mask Group 1-10.png" }) { ...fixedImage }
      image12: file(relativePath: { eq: "Mask Group 1-11.png" }) { ...fixedImage }
      image13: file(relativePath: { eq: "Mask Group 1-12.png" }) { ...fixedImage }
      image14: file(relativePath: { eq: "Mask Group 1-13.png" }) { ...fixedImage }
      image15: file(relativePath: { eq: "Mask Group 1-14.png" }) { ...fixedImage }
      image16: file(relativePath: { eq: "Mask Group 1-15.png" }) { ...fixedImage }
      image17: file(relativePath: { eq: "Mask Group 1-16.png" }) { ...fixedImage }
      image18: file(relativePath: { eq: "Mask Group 1-17.png" }) { ...fixedImage }
      image19: file(relativePath: { eq: "Mask Group 1-18.png" }) { ...fixedImage }
      image20: file(relativePath: { eq: "Mask Group 1-19.png" }) { ...fixedImage }
      image21: file(relativePath: { eq: "Mask Group 1-20.png" }) { ...fixedImage }
      image22: file(relativePath: { eq: "Mask Group 1-21.png" }) { ...fixedImage }
      image23: file(relativePath: { eq: "Mask Group 1-22.png" }) { ...fixedImage }
      image24: file(relativePath: { eq: "Mask Group 1-23.png" }) { ...fixedImage }
      image25: file(relativePath: { eq: "Mask Group 1-24.png" }) { ...fixedImage }
      image26: file(relativePath: { eq: "Mask Group 1-25.png" }) { ...fixedImage }
      image27: file(relativePath: { eq: "Mask Group 1-26.png" }) { ...fixedImage }
      image28: file(relativePath: { eq: "Mask Group 1-27.png" }) { ...fixedImage }
      image29: file(relativePath: { eq: "Mask Group 1-28.png" }) { ...fixedImage }
      image30: file(relativePath: { eq: "Mask Group 1-29.png" }) { ...fixedImage }
    }
  `);

  let html = [];
  listingDataMapped.forEach((element, index) => {
    const { id, title, price } = element;
    html.push(
      <Link key={index} to={`/view/${id}`} state={{ ...element }}>
        <div className="column is-narrow" style={{ width: '180px', overflow: 'hidden' }}>
          <Img fixed={qlData['image' + (index + 1)].childImageSharp.fixed} />
          <p style={{ height: '50px', overflow: 'hidden' }}>{title}</p>
          <p style={{ color: '#E01A1A' }}>{price}</p>
        </div>
      </Link>
    );
  });

  return (
    <Layout>
      <div className="section">
        <div className="container">
          <SEO title="Home" />
          <div className="content">
            <h1>LISTING</h1>
            <hr></hr>
          </div>
          <div className="columns is-centered is-multiline is-mobile">
            {html}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 140) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;