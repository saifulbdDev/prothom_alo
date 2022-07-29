import React from "react";

const Advertisement = ({ type }) => {
  return type === "portrait" ? (
    <div>
      <img
        src="https://via.placeholder.com/350x350"
        width="350px"
        height="350px"
        alt="Advertisement"
      />
    </div>
  ) : (
    <div>
      <img src="https://via.placeholder.com/900x200" alt="Advertisement" />
    </div>
  );
};

export default Advertisement;
