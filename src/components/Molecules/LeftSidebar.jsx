import React, { useState } from "react";

import NewsList from "./NewsList";
import data from "../../sample-datar5.json";

const LeftSidebar = () => {

  const [news, setNews] = useState(data?.latest?.items);
  const [toggleState, setToggleState] = useState("latest");

  const toggleTab = (value) => {
    setNews(data[value]?.items);
    setToggleState(value);
  };

  const navMenu = [
    { name: "latest", title: "সর্বশেষ" },
    { name: "mostread", title: "পঠিত" },
    { name: "discussed", title: "আলোচিত" },
  ];

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : "";
  };

  return (
    <aside>
      <div className="tab-nav">
        {navMenu.map((item) => {
          return (
            <button
            key={item.name}
              className={`tabs ${item.name === toggleState ? 'active':''}`}
              onClick={() => toggleTab(item.name)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="tab-body">
        <div className="tab-body-content">
          <NewsList items={news} />
        </div>
       
      </div>
    </aside>
  );
};

export default LeftSidebar;
