import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../images/marca_mini_app.png";
import cameraIcon from "../images/camera.png";
import backIcon from "../images/seta.png";

function Signup() {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFields((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(fields);
  }

  function handleValidation() {
    let formFields = fields;
    let formErrors = {};
    let isValid = true;

    if (!formFields["username"]) {
      isValid = false;
      formErrors["username"] = "Nome obrigatório!";
    } else {
      formErrors["username"] = "";
    }

    if (formFields["password"].length < 6) {
      isValid = false;
      formErrors["password"] = "A senha deve ter mais de seis dígitos!";
    } else {
      formErrors["password"] = "";
    }

    if (!formFields["email"]) {
      isValid = false;
      formErrors["email"] = "Email obrigatório!";
    } else {
      let atPos = fields["email"].lastIndexOf("@");
      let dotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          atPos < dotPos &&
          atPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          dotPos > 2 &&
          fields["email"].length - dotPos > 2
        )
      ) {
        isValid = false;
        formErrors["email"] = "Email inválido!";
      } else {
        formErrors["email"] = "";
      }
    }

    setErrors(formErrors);
    return isValid;
  }

  function handleSubmit(e) {
    if (!handleValidation()) {
      e.preventDefault();
    }
  }

  return (
    <div className="bg">
      <Container maxWidth="sm">
        <div className="imgsContainer formMargin flex">
          <img src={logo} alt="logo" />
        </div>
        <div className="formContainer">
          <Link to="/">
            <img style={{ margin: "20px" }} src={backIcon} alt="voltar" />
          </Link>
          <div className="flex column formStyle">
            <img src={cameraIcon} alt="foto" />
            <p>Criar Conta</p>

            <form style={{ alignItems: "center" }} className="flex column">
              <input
                onChange={handleChange}
                className="formInput"
                placeholder="Nome"
                type="text"
                name="username"
              />
              <p className="errorText">{errors["username"]}</p>
              <input
                onChange={handleChange}
                className="formInput"
                placeholder="Endereço de e-mail"
                type="email"
                name="email"
              />
              <p className="errorText">{errors["email"]}</p>
              <input
                onChange={handleChange}
                className="formInput"
                placeholder="Senha"
                type="password"
                name="password"
              />
              <p className="errorText">{errors["password"]}</p>

              <Link style={{ marginTop: "20px" }} to={"/listas"}>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="orangeBtn btnSize"
                >
                  Criar Conta
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
