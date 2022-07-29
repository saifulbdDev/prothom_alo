import React from "react";
import { useParams } from "react-router-dom";
import MetaData from "../components/atoms/MetaData";
import { getItem } from "../Service/getData";

const SingleNewsPage = () => {
  const { id } = useParams();
  const data = getItem(id);
  //   console.log(data);
  return (
    <div className="container single">
      <MetaData title={data.headline} />
      <h2>{data.headline}</h2>
      <hr className="seperator-2" />
      {data.cover_photo && (
        <div>
          <img
            src={data.cover_photo}
            title={data.headline}
            alt={data.headline}
          />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: data.descriptions }} />
    </div>
  );
};

export default SingleNewsPage;
