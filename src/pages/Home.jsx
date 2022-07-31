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
        <div className="col-3">
          <LeftSidebar />
        </div>
        <div className="col-9 right-row">
          <div className="col-8">
          <Featured />
          </div>
          <div className="col-4">
          <RightSidebar />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HomePage;
