import React from "react";
import Featured from "../components/Molecules/Featured";
import MetaData from "../components/atoms/MetaData";
import LeftSidebar from "../components/Molecules/LeftSidebar";
import RightSidebar from "../components/Molecules/RightSidebar";

const HomePage = () => {
  return (
    <div className="container">
      <MetaData title="প্রথম আলো | বাংলা নিউজ পেপার" />
      <div className="row">
        <div className="col-1">
          <LeftSidebar />
        </div>
        <div className="col-2">
          <Featured />
        </div>
        <div className="col-1">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
