import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section">
      <h2 className="section__title title-center" data-title="Meus talentos">
        Habilidades Professionais
      </h2>

      <div className="skills__container container grid">
        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">HTML & CSS</h3>
            <span className="skills__no">80%</span>
          </div>

          <p className="skills__description">
            Habilidades profissionais sólidas em HTML e CSS, com capacidade de
            criar layouts responsivos e estilizados, garantindo uma experiência
            de usuário atraente e consistente em diferentes dispositivos e
            navegadores
          </p>

          <div className="skills__bar">
            <div className="skills__percentage" style={{ width: "80%" }}>
              <span></span>
            </div>
          </div>
        </div>

        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">JavaScript</h3>
            <span className="skills__no">65%</span>
          </div>

          <p className="skills__description">
            Experiência em JavaScript, incluindo o desenvolvimento de aplicações
            web interativas e dinâmicas, manipulação eficiente do DOM,
            integração de APIs externas e resolução de problemas complexos de
            programação
          </p>

          <div className="skills__bar">
            <div className="skills__percentage" style={{ width: "65%" }}>
              <span></span>
            </div>
          </div>
        </div>

        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">PhP</h3>
            <span className="skills__no">50%</span>
          </div>

          <p className="skills__description">
            Proficiência intermediária em PHP, com habilidades para desenvolver
            aplicativos web dinâmicos, criar e manipular bancos de dados, e
            implementar funcionalidades back-end para sistemas online
         
          </p>

          <div className="skills__bar">
            <div className="skills__percentage" style={{ width: "50%" }}>
              <span></span>
            </div>
          </div>
        </div>

        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">Java</h3>
            <span className="skills__no">75%</span>
          </div>

          <p className="skills__description">
            Ampla experiência em Java, com capacidade de desenvolver aplicações
            robustas e escaláveis para diversos propósitos, incluindo
            desenvolvimento de software empresarial.
          </p>

          <div className="skills__bar">
            <div className="skills__percentage" style={{ width: "75%" }}>
              <span></span>
            </div>
          </div>
        </div>

        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">React</h3>
            <span className="skills__no">60%</span>
          </div>

          <p className="skills__description">
            Conhecimento básico em React, com habilidades para criar componentes
            reutilizáveis, gerenciar estados e props, e construir interfaces de
            usuário dinâmicas. 
          </p>

          <div className="skills__bar">
            <div className="skills__percentage" style={{ width: "60%" }}>
              <span></span>
            </div>
          </div>
        </div>

        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">MySQL</h3>
            <span className="skills__no">85%</span>
          </div>

          <p className="skills__description">
            Experiência sólida em MySQL, abrangendo desde a criação e manutenção
            de bancos de dados até a escrita de consultas complexas e a
            otimização de desempenho. 
          </p>

          <div className="skills__bar">
            <div className="skills__percentage" style={{ width: "85%" }}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
