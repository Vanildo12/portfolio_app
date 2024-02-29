import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./header.css";

const Header = () => {

  /*================ Toggle Menu========================*/ 
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  /*================== Remove Menu======================*/
  
   const handleItemClick = () => {
     setToggle(false); 
   };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Vanildo António
        </a>

        <ul className={toggle ? "nav__list active" : "nav__list"}>
          <li className="nav__item" onClick={handleItemClick}>
            <a href="#home" className="nav__link active-link">
              Home
            </a>
          </li>
          <li className="nav__item" onClick={handleItemClick}>
            <a href="#about" className="nav__link">
              Sobre
            </a>
          </li>
          <li className="nav__item" onClick={handleItemClick}>
            <a href="#experience" className="nav__link">
              Experiências
            </a>
          </li>
          <li className="nav__item" onClick={handleItemClick}>
            <a href="#services" className="nav__link">
              Serviços
            </a>
          </li>

          <li className="nav__item" onClick={handleItemClick}>
            <a href="#work" className="nav__link">
              Portfólio
            </a>
          </li>

          <li className="nav__item" onClick={handleItemClick}>
            <a href="#contact" className="nav__link">
              Contactos
            </a>
          </li>
        </ul>

        <div className="nav__toggle" onClick={handleToggle}>
          {toggle ? <HiX /> : <HiMenuAlt4 />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
