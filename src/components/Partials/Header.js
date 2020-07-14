import React from "react";

import { Container } from "@material-ui/core";
import logo from "../../css/images/marca_mini_app_clara.png";
import userAvatar from "../../css/images/avatar.png";

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
