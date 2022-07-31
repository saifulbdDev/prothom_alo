import React, { Fragment } from "react";

import Footer from "../Molecules/Footer";
import Header from "../Molecules/Header";

const Default = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="main">{children}</main>
      
      <Footer />
    </Fragment>
  );
};

export default Default;
