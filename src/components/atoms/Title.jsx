import React from "react";

const Title = ({headline, subheadline}) => {
  return (
    <h2>
      {subheadline.length > 0 ? (
        <>
          <span className="red-title">{headline} </span>/ {subheadline}
        </>
      ) : (
        <span className="">{headline}</span>
      )}
    </h2>
  );
};

export default Title;
