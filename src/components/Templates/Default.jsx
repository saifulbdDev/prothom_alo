import React, { Fragment } from "react";
import Advertisement from "../Molecules/Advertisement";
import Footer from "../Molecules/Footer";
import Header from "../Molecules/Header";

const Default = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <div className="ft-ad">
        <Advertisement type="landscape" />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Default;
