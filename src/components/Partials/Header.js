import React from "react";

import { Container } from "@material-ui/core";
import logo from "../../cssimages/marca_mini_app_clara.png";
import userAvatar from "../../cssimages/avatar.png";

function Header() {
  return (
    <div className="headerBackground">
      <Container className="containerMaxWidth">
        <div className="flex headerContainer">
          <div className="flex">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="user flex">
            <img className="userImg" src={userAvatar} alt="userAvatar" />
            <p className="userText">Usuário 1</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;