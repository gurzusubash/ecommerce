import React from "react";
import { Link } from "react-router-dom";

import "./navigation-bar.styles.scss";

const NavigationBar = () => (
  <div className="navigation">
    <Link className="logo-container link" to="/">
      Subash
    </Link>
    <div className="options">
      <Link className="option link" to="/shop">
        SHOP
      </Link>
      <Link className="option link" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default NavigationBar;
