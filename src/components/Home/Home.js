import React from "react";

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

function Home() {
  return (
    <div className="bg">
      <Container maxWidth="sm">
        <div className="imgsContainer flex">
          <img className="homeImg1" src={responsiveImg} alt="img" />
          <img className="homeImg2" src={logo} alt="logo" />
        </div>
        <div className="flex column homeBtnContainer">
          <Link to="/listas">
            <Button className="greenBtn btnSize">Entrar</Button>
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

export default Home;
