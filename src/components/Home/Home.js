import React from "react";

import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import responsiveImg from "../../css/images/img_responsive.png";
import logo from "../../css/images/marca_mini_app.png";

function Home() {
  return (
    <div className="bg">
      <Container maxWidth="sm">
        <div className="imgsContainer flex">
          <img src={responsiveImg} alt="img" />
          <img src={logo} alt="logo" />
        </div>
        <div className="flex column homeBtnContainer">
          <Link to="/listas">
            <Button className="greenBtn btnSize">Entrar</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
