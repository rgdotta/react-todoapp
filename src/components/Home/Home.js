import React, { useState } from "react";
import { connect } from "react-redux";
import { setUsername } from "../../redux/actions";

import {
  Container,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreSharp";
import { Link } from "react-router-dom";
import responsiveImg from "../../css/images/img_responsive.png";
import logo from "../../css/images/marca_mini_app.png";

function Home(props) {
  const [name, setName] = useState("");
  const [changeName, setChangeName] = useState(false);
  const [error, setError] = useState("");

  function submitUsername(e) {
    if ((changeName && !name) || (!name && !props.username.name)) {
      setError("Você esqueceu do seu apelido!");
      e.preventDefault();
    } else if (changeName || !props.username.name) {
      props.setUsername(name);
    }
  }

  return (
    <div className="bg">
      <Container maxWidth="sm">
        <div className="imgsContainer flex">
          <img className="homeImg1" src={responsiveImg} alt="img" />
          <img className="homeImg2" src={logo} alt="logo" />
        </div>
        {changeName === false && props.username.name ? (
          <div className="usernameContainer">
            <p className="homeUsername"> Bem-vindo(a) {props.username.name}!</p>
            <button
              className="noStyleBtn changeNameBtn"
              onClick={(e) => {
                setChangeName(true);
                e.preventDefault();
              }}
            >
              Alterar apelido
            </button>
          </div>
        ) : (
          <div className="usernameContainer flex column">
            <label htmlFor="usernameInput">Digite seu apelido:</label>
            <input
              className="defaultInput"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="usernameInput"
            />
            {error && <p className="errorText">{error}</p>}
          </div>
        )}
        <div className="flex column homeBtnContainer">
          <Link to="/listas">
            <Button onClick={submitUsername} className="greenBtn btnSize">
              Entrar
            </Button>
          </Link>
        </div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Como funciona?</h4>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <p>
                O Tarefeiro é um organizador de lista de tarefas, voltadas para
                tarefas de curto prazo, sem qualquer compromisso com o site.
              </p>
              <p>
                Aqui, todas as tarefas são salvas no local storage do seu
                navegador. Ou seja,não utiliza banco de dados, os dados ficam
                salvos direto no seu navegador.
              </p>
              <p>
                Mais segurança na privacidade do seus dados, pois só você tem
                acesso as suas tarefas.
              </p>
              <p>Não precisa criar conta.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              Entrei no site e todas as minhas tarefas sumiram, o que aconteceu?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <p>
                Como suas tarefas ficam salvas no seu navegador, alguns fatores
                influenciam na visibilidade das tarefas.
              </p>
              <p>
                Se você trocou de navegador as tarefas serão outras (ex: do
                Chrome, para o Mozila).{" "}
              </p>
              <p>
                Se você está em outro dispositivo (computador, celular, etc.),
                ou formatou o seu, as tarefas serão outras.
              </p>
              <p>Limpar o local storage apagará as tarefas.</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  const username = state.username;

  return { username };
};

export default connect(mapStateToProps, { setUsername })(Home);
