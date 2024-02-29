import React from "react";
import cvFile from "../../assets/CV/CV.pdf"; // Importe o arquivo do currículo com a extensão correta (.pdf)
import vanildoProfile from "../../assets/img/profile.png"; // Importe a imagem de perfil com a extensão correta (.jpg)
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <span className="home__small">Olá</span>
          <h1 className="home__title">
            <span>Eu sou</span> Vanildo da Silva <br /> <span>IT</span> e
            <span> Engenheiro de Processos Industriais</span>
          </h1>

          <p className="home__description">
            Vanildo Antonio é um profissional versátil com expertise em
            Tecnologia da Informação (TI) e Engenharia de Processos Industriais.
            Com habilidades sólidas em sistemas de computadores, redes,
            segurança da informação e desenvolvimento de software.
            <br /> Sua capacidade de analisar dados e métricas o capacita a identificar
            oportunidades de melhoria e tomar decisões estratégicas que
            impulsionam a eficiência operacional e reduzem custos.
          </p>

          <div className="home__btns">
            <a href="#contact" className="btn">
              Contacto
            </a>
            <a href={cvFile} className="btn btn--transparent" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="home__img-container">
          <img
            src={vanildoProfile}
            alt="Vanildo Profile"
            className="home__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
