import React from "react";
import Testimonials1 from "../../assets/img/testimonials -1.jpg";
import Testimonials2 from "../../assets/img/testimonials -2.jpg";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <h2 className="section__title title-center" data-title="Testemunhos">
        Oque os clientes dizem
      </h2>

      <div className="testimonials__container container grid">
        <div className="testimonials__item">
          <p className="testimonials__description">
            O profissionalismo e a dedicação do Vanildo em seu trabalho são
            notáveis. Ele sempre busca entender nossas necessidades e entrega
            resultados de alta qualidade de maneira consistente
          </p>

          <div className="testimonials__data">
            <img src={Testimonials1} alt="" className="testimonials__img" />

            <div>
              <h3 className="testimonials__name">Suneyza Adamo</h3>
              <span className="testimonials__identity">Cidade da Beira, Sofala, Mozambique</span>
            </div>
          </div>
        </div>
        <div className="testimonials__item">
          <p className="testimonials__description">
            Estamos extremamente satisfeitos com os serviços prestados pelo
            Vanildo. Sua habilidade técnica, comunicação clara e compromisso com
            os prazos nos impressionaram. Recomendamos seus serviços sem
            hesitação
          </p>

          <div className="testimonials__data">
            <img src={Testimonials2} alt="" className="testimonials__img" />

            <div>
              <h3 className="testimonials__name">Armando Paulo</h3>
              <span className="testimonials__identity">Cidade da Beira, Sofala,  Mozambique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
