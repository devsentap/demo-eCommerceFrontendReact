import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "gatsby";
import Icon from "@mdi/react";
import {
  mdiHeartOutline, mdiShareVariant, mdiFlag,
  mdiEmail, mdiPhone, mdiChatOutline, mdiAccount
} from "@mdi/js";
import "bulma/css/bulma.min.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ViewPage = (props) => {
  let { location: { state } } = props;

  const [data, setData] = useState(state);
  const [similarData, setSimilarData] = useState([]);

  useEffect(() => {
    // we only call the view API when we directly go to that page (type in the url)
    // otherwise we just fetch the data passed from the listing page thru props
    const fetchData = async () => {
      if (data === null) {
        const id = props['*'];
        const result = await axios(`https://5b35ede16005b00014c5dc86.mockapi.io/view/${id}`);
        const listingDataMapped = { id: result.data.id, ...result.data.data.attributes };
        setData(listingDataMapped);
      }
    };

    const fetchSimilarData = async () => {
      const id = props['*'];
      const result = await axios(`https://5b35ede16005b00014c5dc86.mockapi.io/similar/${id}`);
      const similarListingDataMapped = result.data.data.map(element => {
        return { id: element.id, ...element.attributes };
      });
      setSimilarData(similarListingDataMapped);
    };

    fetchData();
    fetchSimilarData();
  }, []);

  // no need to render anything if data is null, ideally we should display error page here
  if (data === null || data === undefined || similarData === null) { return null; }

  let similarHTML = [];
  similarData.forEach((element, index) => {
    const { id, title, price } = element;
    let imageName = id === 1 ? '/Mask Group 1.png' : `/Mask Group 1-${id - 1}.png`;
    similarHTML.push(
      <Link key={index} to={`/view/${id}`}>
        <div className="column" style={{ width: '130px' }}>
          <figure className="image">
            <img src={imageName} />
          </figure>
          <p style={{ height: '80px', overflow: 'hidden' }}>{title}</p>
          <p style={{ color: '#E01A1A' }}>{price}</p>
        </div>
      </Link>
    );
  });

  let {
    id,
    title,
    price,
    description,
    condition,
    location,
    seller_name,
    seller_type,
    phone
  } = data;
  description = description.split("\\n").join("<br>");
  id = parseInt(id);
  let imageName = id === 1 ? '/Mask Group 1@2x.png' : `/Mask Group 1-${id - 1}@2x.png`;

  // this is getting too big, we can separate into components
  return (
    <Layout>
      <div className="section">
        <div className="container">
          <SEO title="View" />
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Electronics</a></li>
              <li><a href="/">Games & Console</a></li>
              <li className="is-active"><a href="#" aria-current="page">{title}</a></li>
            </ul>
          </nav>
          <div className="columns is-centered is-multiline">
            
            {/* this can be made into Description component */}
            <div className="column is-two-thirds">
              <figure className="image">
                <img src={imageName} />
              </figure>
              <br></br>
              <div className="level">
                <h1 style={{ color: '#E01A1A' }}>DESCRIPTION</h1>
                <div className="level-item level-right">
                  <Icon size={1} path={mdiFlag} />
                  <span style={{ marginLeft: '10px' }}>Report Ad</span>
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>

            {/* this can be made into ContactDetails component */}
            <div className="column is-one-third">
              <div className="level">
                <div className="level-item">
                  <Icon size={1} path={mdiHeartOutline} />
                  <span style={{ marginLeft: '10px' }}>Wishlist</span>
                  <Icon size={1} path={mdiShareVariant} style={{ marginLeft: '30px' }} />
                  <span style={{ marginLeft: '10px' }}>Share</span>
                </div>
              </div>

              <h1>Price</h1>
              <p style={{ color: '#E01A1A' }}>{price}</p>
              <br />
              <h1>Item Condition</h1>
              <p style={{ fontWeight: 'bold' }}>{condition}</p>
              <br />
              <h1>Item Location</h1>
              <p style={{ fontWeight: 'bold' }}>{location}</p>
              <br />
              <h1>Seller Info</h1>
              <br />
              <div className="columns">
                <div className="column is-narrow">
                  <Icon size={1} path={mdiAccount} />
                </div>
                <div className="column">
                  <p style={{ fontWeight: 'bold' }}>{seller_name}</p>
                  <p>{seller_type}</p>
                </div>
              </div>

              <h1>Interested with the ad? Contact the seller</h1>
              <div className="buttons">
                <button className="button is-small is-fullwidth">
                  <Icon size={1} path={mdiPhone} />
                  <p style={{ marginLeft: '10px' }}>{phone}</p>
                </button>
                <button className="button is-small is-fullwidth">
                  <Icon size={1} path={mdiEmail} />
                  <p style={{ marginLeft: '10px' }}>Email</p>
                </button>
                <button className="button is-small is-fullwidth">
                  <Icon size={1} path={mdiChatOutline} />
                  <p style={{ marginLeft: '10px' }}>Chat</p>
                </button>
              </div>

              <Link to="/">Go back to the homepage</Link>

            </div>
            
            {/* this can be made into SimilarItems component */}
            <div className="column">
              <h1>SIMILAR ITEMS</h1>
              <br />
              <div className="columns is-centered is-multiline is-mobile">
                {similarHTML}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewPage
