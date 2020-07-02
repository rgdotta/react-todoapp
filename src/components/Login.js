import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../images/marca_mini_app.png";
import backIcon from "../images/seta.png";

function Login() {
  const [fields, setFields] = useState({
    username: "",
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
            <p>Entrar</p>

            <form
              style={{ alignItems: "center", marginTop: "40px" }}
              className="flex column"
            >
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
                placeholder="Senha"
                type="password"
                name="password"
              />
              <p className="errorText">{errors["password"]}</p>

              <Link style={{ marginTop: "20px" }} to={"/listas"}>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="greenBtn btnSize"
                >
                  Entrar
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
