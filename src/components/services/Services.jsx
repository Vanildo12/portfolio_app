import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title title-center" data-title="Serviços">
        Serviços Prestados
      </h2>

      <div className="services__container container grid">
        <div className="services__item">
          <i className="fa-solid fa-code services__icon"></i>
          <h3 className="services__title">Desenvolvimento Web</h3>
          <p className="services__description">
            Ofereço serviços de desenvolvimento web sob medida, capacitando
            empresas a alcançarem sua visão online por meio de soluções digitais
            inovadoras e altamente adaptáveis, projetadas para atender
            precisamente às suas necessidades e objetivos de negócios.
          </p>
          <span className="services__no">01</span>
        </div>

        <div className="services__item">
          <i className="fa-solid fa-laptop services__icon"></i>
          <h3 className="services__title">
            Instalação e Manutenção de Computadores
          </h3>
          <p className="services__description">
            Ofereco serviços profissionais de instalação e manutenção de
            computadores, garantindo que os sistemas estejam operando de forma
            eficiente e confiável para atender às necessidades específicas de
            cada cliente
          </p>
          <span className="services__no">02</span>
        </div>

        <div className="services__item">
          <i className="fa-solid fa-database services__icon"></i>
          <h3 className="services__title">Base de Dados (MySQL)</h3>
          <p className="services__description">
            Expertise em MySQL, fornecendo serviços especializados de
            administração de banco de dados, otimização de consultas e modelagem
            de dados para garantir desempenho máximo e confiabilidade em
            ambientes de armazenamento de dados..
          </p>
          <span className="services__no">03</span>
        </div>

        <div className="services__item">
          <i className="fa-solid fa-shield-halved services__icon"></i>
          <h3 className="services__title">Segurança Cibernética</h3>
          <p className="services__description">
            Serviços especializados em segurança cibernética, protegendo
            ativamente empresas contra ameaças digitais por meio da
            implementação de soluções robustas de prevenção, detecção e resposta
            a incidentes, garantindo a integridade, confidencialidade e
            disponibilidade dos dados
          </p>
          <span className="services__no">04</span>
        </div>

        <div className="services__item">
          <i className="fa-solid fa-network-wired services__icon"></i>
          <h3 className="services__title">Redes de Computadores</h3>
          <p className="services__description">
            Ofereco serviços abrangentes em redes de computadores, incluindo
            planejamento, implementação e manutenção de infraestruturas de rede
            escaláveis e seguras, garantindo conectividade confiável e
            desempenho otimizado para ambientes corporativos
          </p>
          <span className="services__no">05</span>
        </div>

        <div className="services__item">
          <i className="fa-solid fa-ellipsis services__icon"></i>
          <h3 className="services__title">Diversos</h3>
          <p className="services__description">
            Ofereco uma ampla gama de serviços especializados em tecnologia
            da informação, abrangendo desde segurança cibernética e redes de
            computadores até administração de banco de dados MySQL. Nosso
            objetivo é fornecer soluções abrangentes e personalizadas para
            atender às diversas necessidades de nossos clientes em um mundo cada
            vez mais digitalizado
          </p>
          <span className="services__no">06</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
