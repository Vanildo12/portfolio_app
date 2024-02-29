import React from "react";
import projectImg1 from "../../assets/img/service-1.jpg";
import projectImg2 from "../../assets/img/project-img-2.jpg";
import projectImg3 from "../../assets/img/service-2.jpg";
import projectImg4 from "../../assets/img/service-4.jpg";
import projectImg5 from "../../assets/img/service-5.jpg";
import projectImg6 from "../../assets/img/service-3.jpg";
import "./works.css";

const Works = () => {
  return (
    <section className="works section" id="work">
      <h2 className="section__title title-center" data-title="Meus Trabalhos">
        Portfolio
      </h2>

      <div className="work__container container grid">
        <div className="work__card">
          <img src={projectImg1} alt="" className="work__img" />

          <div className="work__details">
            <h3 className="work__title">Desenvolvimento Web</h3>
            <span className="work__description">
              Criando experiências digitais impactantes e acessíveis para a web.
            </span>
          </div>
        </div>

        <div className="work__card">
          <img src={projectImg2} alt="" className="work__img" />

          <div className="work__details">
            <h3 className="work__title">Desenvolvimento App</h3>
            <span className="work__description">
              Construindo soluções inovadoras e intuitivas para dispositivos
              móveis e plataformas diversas.
            </span>
          </div>
        </div>

        <div className="work__card">
          <img src={projectImg3} alt="" className="work__img" />

          <div className="work__details">
            <h3 className="work__title">Software e Hardware</h3>
            <span className="work__description">
              Implantação eficiente e confiável de soluções tecnológicas,
              abrangendo desde a configuração de sistemas até a integração de
              dispositivos físicos, visando garantir operações fluidas e
              desempenho otimizado.
            </span>
          </div>
        </div>

        <div className="work__card">
          <img src={projectImg4} alt="" className="work__img" />

          <div className="work__details">
            <h3 className="work__title">Protecao de Dados</h3>
            <span className="work__description">
              Implementação de medidas abrangentes de segurança para garantir a
              confidencialidade, integridade e disponibilidade das informações,
              em conformidade com regulamentações e melhores práticas de
              privacidade.
            </span>
          </div>
        </div>

        <div className="work__card">
          <img src={projectImg5} alt="" className="work__img" />

          <div className="work__details">
            <h3 className="work__title">Redes de Computadores</h3>
            <span className="work__description">
              Implementação e otimização de infraestruturas de rede confiáveis e
              seguras para suportar operações digitais ágeis e resilientes.
            </span>
          </div>
        </div>

        <div className="work__card">
          <img src={projectImg6} alt="" className="work__img" />

          <div className="work__details">
            <h3 className="work__title">Base de Dados</h3>
            <span className="work__description">
              Gerenciamento eficiente e otimizado de dados para aplicações
              robustas e escaláveis.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
