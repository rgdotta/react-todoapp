import React from "react";
import { connect } from "react-redux";

import { Container } from "@material-ui/core";
import logo from "../../css/images/marca_mini_app_clara.png";

const Header = (props) => {
  return (
    <div className="headerBackground">
      <Container className="containerMaxWidth">
        <div className="flex headerContainer">
          <img className="logo" src={logo} alt="logo" />
          <p>
            Listas de tarefas de{" "}
            {props.username.name ? props.username.name : "Esquecido"}.
          </p>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const username = state.username;

  return { username };
};

export default connect(mapStateToProps)(Header);
