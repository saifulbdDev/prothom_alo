import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getSelected } from "../../Service/getData";
import Title from "../../components/atoms/Title";
const Featured = () => {
  const data = getSelected();
  const bigFeatured = data[0];
  const items = data.slice(1, 3);

  const itemsList = items.map((item) => (
    <div key={item.id} className="rest-selected-box">
      <img src={item.thumb} alt={item.headline} />
      <Link to={`/${item.id}`} className="rest-selected-box-title">
        <Title headline={item.headline} subheadline={item.subheadline} />
      </Link>
    </div>
  ));

  return (
    <div className="featured">
      <h2 className="featured-title">নির্বাচিত</h2>
      <Link to={`/${bigFeatured?.id}`}>
        <div className="featured-box">
          <img
            src={bigFeatured?.thumb}
            alt={bigFeatured?.title}
            title={bigFeatured?.title}
            className="big-image"
          />
          <h2>{bigFeatured?.headline}</h2>
        </div>
      </Link>
      <div className="rest-selected">{itemsList}</div>
    </div>
  );
};

export default Featured;
