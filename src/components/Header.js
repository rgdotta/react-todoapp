import React from "react";
import { Container } from "@material-ui/core";
import logo from "../images/marca_mini_app_clara.png";
import userAvatar from "../images/avatar.png";

function Header() {
  return (
    <div className="headerBackground">
      <Container maxWidth="md">
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
