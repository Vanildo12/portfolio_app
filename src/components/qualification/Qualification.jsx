import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="experience">
      <h2 className="title-center section__title" data-title="Minha Jornada">
        Qualificações
      </h2>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3 className="resume__heading">Educação</h3>

          <div className="resume__items">
            <div className="resume__item">
              <div className="resume__header">
                <h3 className="resume__subtitle">Universidade Zambeze</h3>
                <span className="resume__icon">+</span>
              </div>

              <div className="resume__content">
                <div className="resume__date-title">
                  <h3 className="resume__title">
                    Engenharia de Processos Industriais
                  </h3>
                  <span className="resume__date">2023</span>
                </div>

                <p className="resume__description">
                  Engenheiro de Processos Industriais com sólida formação
                  acadêmica e experiência prática em otimização de processos,
                  gestão de produção e implementação de soluções inovadoras para
                  aumentar a eficiência e a qualidade na indústria
                </p>
              </div>
            </div>

            <div className="resume__item">
              <div className="resume__header">
                <h3 className="resume__subtitle">CPRD - Sofala</h3>
                <span className="resume__icon">+</span>
              </div>

              <div className="resume__content">
                <div className="resume__date-title">
                  <h3 className="resume__title">Cisco Networking Essentials</h3>
                  <span className="resume__date">2019</span>
                </div>

                <p className="resume__description">
                  Profissional certificado em Cisco Networking Essentials com
                  habilidades avançadas em redes de computadores, configuração
                  de dispositivos de rede, resolução de problemas e
                  implementação de soluções de conectividade seguras.
                </p>
              </div>
            </div>

            <div className="resume__item">
              <div className="resume__header">
                <h3 className="resume__subtitle">CPRD - Sofala</h3>
                <span className="resume__icon">+</span>
              </div>

              <div className="resume__content">
                <div className="resume__date-title">
                  <h3 className="resume__title">Cisco CiberSeguranca</h3>
                  <span className="resume__date">2019</span>
                </div>

                <p className="resume__description">
                  Profissional certificado em Cisco Cybersecurity com expertise
                  em proteção de redes e sistemas contra ameaças cibernéticas.
                  Especializado em implementar estratégias de segurança,
                  monitorar e detectar atividades maliciosas, e responder a
                  incidentes de segurança de forma eficaz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="resume__group">
          <h3 className="resume__heading">Experiências Profissionais</h3>

          <div className="resume__items">
            <div className="resume__item">
              <div className="resume__header">
                <h3 className="resume__subtitle">TerraMar - Logistics</h3>
                <span className="resume__icon">+</span>
              </div>

              <div className="resume__content">
                <div className="resume__date-title">
                  <h3 className="resume__title">Agente Operacional</h3>
                  <span className="resume__date">2022 - 2023</span>
                </div>

                <p className="resume__description">
                  Demonstrou habilidades excepcionais na gestão de inventário,
                  planejamento de rotas de transporte, e coordenação de equipes
                  para garantir entregas pontuais e satisfazer as demandas dos
                  clientes.
                </p>
              </div>
            </div>

            <div className="resume__item">
              <div className="resume__header">
                <h3 className="resume__subtitle">
                  Beira Networking Essentials
                </h3>
                <span className="resume__icon">-</span>
              </div>

              <div className="resume__content">
                <div className="resume__date-title">
                  <h3 className="resume__title">Oficial de IT</h3>
                  <span className="resume__date">2022 - 2023</span>
                </div>

                <p className="resume__description">
                  Técnico em TI com experiência na Beira Networking Essentials,
                  especializado em fornecer suporte técnico abrangente e
                  soluções de TI eficazes. Demonstrou profundo conhecimento em
                  redes de computadores, configuração de dispositivos de rede.
                </p>
              </div>
            </div>

            <div className="resume__item">
              <div className="resume__header">
                <h3 className="resume__subtitle">Jixin Shacman</h3>
                <span className="resume__icon">+</span>
              </div>

              <div className="resume__content">
                <div className="resume__date-title">
                  <h3 className="resume__title">
                    Tecnico IT e Assistente de Markentig
                  </h3>
                  <span className="resume__date">2021</span>
                </div>

                <p className="resume__description">
                  Técnico em TI e promotor/assistente de marketing na Jixin
                  SHACMAN, com experiência multifacetada na gestão de tecnologia
                  da informação e no apoio às atividades de marketing.
                  Além disso, contribuí ativamente para iniciativas
                  de marketing, promovendo produtos e serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
