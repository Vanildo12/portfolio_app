import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com"; // Importando a biblioteca do EmailJS
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    conteudo: "",
    mensagem: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviando o formulário usando o serviço EmailJS
      await emailjs.sendForm(
        "service_mh2z8xt",
        "template_nyq6s4n",
        e.target,
        "Yf9xGeuD0NkJBb6v-"
      );
      alert("Email enviado com sucesso!"); // Exibindo uma mensagem de sucesso
      // Limpando os campos do formulário após o envio
      setFormData({
        nome: "",
        email: "",
        conteudo: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert("Erro ao enviar email. Por favor, tente novamente.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact section" id="contact">
      <h2
        className="section__title title-center"
        data-title="Mantenha - se em Contacto"
      >
        Contactos
      </h2>

      <div className="contact__container container grid">
        <div className="contact__details">
          <div className="contact__item">
            <i className="fa-solid fa-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Ligue</h3>
              <span className="contact__data">(+258) 8459-80-003</span>
            </div>
          </div>

          <div className="contact__item">
            <i className="fa-solid fa-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__data">
                <a href="mailto:vanildoantonio19@gmail.com">
                  vanildoantonio19@gmail.com
                </a>
              </span>
            </div>
          </div>

          <div className="contact__item">
            <i className="fa-solid fa-location-dot contact__icon"></i>
            <div>
              <h3 className="contact__title">Localização</h3>
              <span className="contact__data">
                Cidade da Beira, Sofala, Mozambique
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="form__group">
            <div className="form__input">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="input__control"
                placeholder="Nome"
              />
            </div>
            <div className="form__input">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input__control"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="form__input">
            <input
              type="text"
              name="conteudo"
              value={formData.conteudo}
              onChange={handleChange}
              placeholder="Conteudo"
              className="input__control"
            />
          </div>

          <div className="form__input">
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Mensagem"
              className="input__control textarea "
            ></textarea>
          </div>

          <button type="submit" className="btn contact__btn">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
