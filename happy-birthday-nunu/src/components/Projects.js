import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import primeira from "../assets/img/primeira-foto.jpg";
import florzinha from "../assets/img/florzinha.jpg";
import caco from "../assets/img/caco.jpg";
import caous from "../assets/img/caous.jpg";
import banguela from "../assets/img/banguela.jpg";
import mae from "../assets/img/mae.jpg";
import pai from "../assets/img/pai.jpg";
import trem from "../assets/img/trem.jpg";
import bath from "../assets/img/bath.jpeg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const joguinho = [
    {
      title: "#1",
      description: "Onde eu tirei a segunda foto que já tirei sua?",
      imgUrl: primeira,
    },
    {
      title: "#2",
      description: "Quando nosso filhote faz aniversário?",
      imgUrl: caous,
    },
    {
      title: "#3",
      description: "Um sonho em comum que nós temos pra daqui uns 10 anos",
      imgUrl: caco,
    },
    {
      title: "#4",
      description:
        "Qual era o nome da cor que o dono pediu pra pintar seu quase futuro apê?",
      imgUrl: mae,
    },
    {
      title: "#5",
      description: "Do que era o museu que a gente foi em Piracicaba?",
      imgUrl: pai,
    },
    {
      title: "#6",
      description: "O que você não pode fazer comigo?",
      imgUrl: trem,
    },
    {
      title: "#7",
      description:
        "Qual é o lugar em que mais tiramos fotos nos últimos meses?",
      imgUrl: bath,
    },
    {
      title: "#8",
      description: "Qual criatura mística nós temos em comum?",
      imgUrl: banguela,
    },
    {
      title: "#9",
      description: "Nada não, só te achei linda nessa e decidi deixar",
      imgUrl: florzinha,
    },
  ];

  // !!! COLOCAR {newLocal} NO FINAL DA SECTION !!!
  // const newLocal = (
  //   <img
  //     className="background-image-right"
  //     src={colorSharp2}
  //     alt="background"
  //   ></img>
  // );

  return (
    <section className="joguinho" id="joguinho">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Joguinho</h2>

                  <p>
                    <p></p>
                    Mô, seguinte!<br></br>
                    Pensei em alguns momentos especiais e pra deixar isso mais
                    divertido você precisa acertar umas perguntinhas para
                    desbloquear essas lembranças
                  </p>

                  <Row>
                    {joguinho.map((photo, index) => {
                      return <ProjectCard key={index} {...photo} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
