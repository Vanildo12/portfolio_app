import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__copyright">
          &copy; 2024 Vanildo Antonio. Todos os Direitos Reservados
        </p>

        <div className="footer__social-links">
          <a
            href="https://www.twitter.com/"
            className="footer__social-link"
            target="__blank"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="__blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            href="https://www.github.com/"
            className="footer__social-link"
            target="__blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=845980003"
            className="footer__social-link"
            target="__blank"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
