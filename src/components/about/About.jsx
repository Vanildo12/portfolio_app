import React from "react";
import cvFile from "../../assets/CV/CV.pdf";
import aboutProfile from "../../assets/img/about.png";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__img-container">
          <img src={aboutProfile} alt="about" className="about__img" />
        </div>

        <div className="about__content">
          <h2 className="section__title" data-title="Quem sou EU?">
            Vanildo da Silva é IT e Engenheiro de Processos Industriais
          </h2>

          <p className="about__description">
            Vanildo Antonio é um profissional experiente em TI e Engenharia de
            Processos Industriais, especializado em otimização de fluxos de
            trabalho e integração de sistemas para melhorar a eficiência
            operacional. 
          </p>

          <ul className="about__data grid">
            <li className="data__item">
              <h3 className="data__title">Nome: </h3>
              <span className="data__description"> Vanildo Antonio</span>
            </li>
            <li className="data__item">
              <h3 className="data__title">Idade: </h3>
              <span className="data__description">25 anos</span>
            </li>
            <li className="data__item">
              <h3 className="data__title">Pais: </h3>
              <span className="data__description">Mozambique</span>
            </li>
            <li className="data__item">
              <h3 className="data__title">Email: </h3>
              <span className="data__description">
                <a
                  href="mailto:vanildoantonio19@gmail.com"
                  className="about__link"
                >
                  vanildoantonio19@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <div className="about__bottom">
            <a href={cvFile} className="btn" target="__blank">
              {" "}
              Download CV
            </a>

            <div className="about__social-links">
              <a
                href="https://www.twitter.com/"
                className="about__social-link"
                target="__blank"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                className="about__social-link"
                target="__blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a
                href="https://www.github.com/"
                className="about__social-link"
                target="__blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=845980003"
                className="about__social-link"
                target="__blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
