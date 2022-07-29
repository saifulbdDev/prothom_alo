import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src="https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg"
            alt="Prothom Alo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
