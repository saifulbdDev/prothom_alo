import React from "react";

const Advertisement = ({ type }) => {
  return type === "portrait" ? (
    <div className="portrait">
      <img
        src="https://via.placeholder.com/350x350"
        width="350px"
        height="250px"
        alt="Advertisement"
      />
    </div>
  ) : (
    <div className="landscape">
      <img src="https://via.placeholder.com/900x200" alt="Advertisement" />
    </div>
  );
};

export default Advertisement;
