import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/atoms/Title";
const NewsList = ({ items, path }) => {
  const numberBd = (value) => value.toLocaleString("bn-BD");
  const List = items.map((item, index) => (
    <li key={item.id}>
      <h3>{numberBd(index + 1)}</h3>
      <div className="news-card">
        <Link to={`/${path}/${item.id}`}>
          <Title headline={item.headline} subheadline={item.subheadline} />
        </Link>
      </div>
    </li>
  ));
  return items.length > 0 ? (
    <ul className="tab-content-list">{List}</ul>
  ) : (
    <div>Nothing to display</div>
  );
};

export default NewsList;
