import React from "react";

import { Container } from "@material-ui/core";
import logo from "../../css/images/marca_mini_app_clara.png";

function Header() {
  return (
    <div className="headerBackground">
      <Container className="containerMaxWidth">
        <div className="flex headerContainer">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </Container>
    </div>
  );
}

export default Header;
