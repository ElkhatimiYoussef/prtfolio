import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="flip-up">Youssef</h3>
        <p className="polo" data-aos="flip-up">
          je suis un étudiant en développement web passionné par la création des
          web application et la programmation. je possède une solide
          connaissance des langages de base tels que HTML, CSS et JavaScript,
          ainsi que des compétences en programmation backend tels que Php,
          Python, ou Java. je suis également capable d'utiliser des frameworks
          tels que Bootstrap, NodeJs, Springboot et ReactJs pour améliorer mes
          expérience
        </p>
        <div className="header__cta" data-aos="fade-in">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
