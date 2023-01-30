import peach from "../assets/img/peach.svg";
import spaghetti from "../assets/img/spaghetti.svg";
import care from "../assets/img/care.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
//import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const newLocal = (
  //   <img className="background-image-left" src={colorSharp} alt="background" />
  // );

  return (
    <section className="amovc" id="amovc">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Eu amo você, porque</h2>
              <p>---</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={spaghetti} alt="Image" />
                  <h5>Fica pertinho, mesmo quando estamos longe</h5>
                </div>
                <div className="item">
                  <img src={peach} alt="Image" />
                  <h5>É uma goxtosa</h5>
                </div>
                <div className="item">
                  <img src={spaghetti} alt="Image" />
                  <h5>Faz comidinhas cheias de amor</h5>
                </div>
                <div className="item">
                  <img src={care} alt="Image" />
                  <h5>Tem carinho e cuidado com tudo em mim</h5>
                </div>
                <div className="item">
                  <img src={peach} alt="Image" />
                  <h5>Enche meus dias de dengo</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
