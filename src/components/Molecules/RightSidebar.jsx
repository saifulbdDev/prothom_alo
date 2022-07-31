import React from "react";
import { Link } from "react-router-dom";
import { getSelected } from "../../Service/getData";
import Title from "../atoms/Title";
import Advertisement from "./Advertisement";

const RightSidebar = () => {
  const data = getSelected();
  const items = data.slice(3, data.length);
  
  
  console.log(items)

  const list = items.map((item) => (
    <div key={item.id} className="box">
      <div className="left">
        <Link to={`/${item.id}`}>
          <Title headline={item.headline} subheadline={item.subheadline} />
        </Link>
        <div className="time">৪ ঘণ্টা আগে</div>
      </div>
      <div className="right">
        <img src={item.thumb} alt={item.headline} />
      </div>
    </div>
  ));
  return (
    <aside className="right-sidebar">
   
        <h2 className="title">বিজ্ঞাপন</h2>
        <Advertisement  type="portrait" />
        <hr className="seperator" />
        {items.length !== 0 && list}
  
    </aside>
  );
};

export default RightSidebar;
