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
      <div className="container header__container" >
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="flip-up">Youssef Elkhatimi</h3>
        <p className="polo" data-aos="fade-in">



          <big>Bientôt diplômé de l'EMSI en Informatique et Réseaux (option MIAGE)
             Je recherche activement <strong> un stage PFE de 6 mois dans le domaine des technologies Spring (Angular / React js) Dès fin février </strong>
          </big>
        


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
