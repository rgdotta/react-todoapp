import React from "react";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import responsiveImg from "../images/img_responsive.png";
import logo from "../images/marca_mini_app.png";

function Home() {
  return (
    <div className="bg">
      <Container maxWidth="sm">
        <div className="imgsContainer flex">
          <img src={responsiveImg} alt="img" />
          <img src={logo} alt="logo" />
        </div>
        <div className="flex column homeBtnContainer">
          <Link to="/registrar">
            <Button className="orangeBtn btnSize">Criar Conta</Button>
          </Link>
          <Link to="/login">
            <Button className="greenBtn btnSize">Entrar</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
