import React, { useEffect } from 'react';
import './homepage.css'; 
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import AOS from 'aos'; // Importa o JS do AOS
import anonImage from '../../img/anon.png'; 
import NavBar from '../../Components/NavBar/NavBar.jsx';
import FAQ from '../../Components/FAQ/FAQ.jsx'

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS com duração de 1s
  }, []);

  return (
    <div>
      <NavBar/>
      <main>
        <section className="hero">
          <div className="hero-content" data-aos="fade-up">
            <h1>ILLUSION<br />ROADMAPS</h1>
            <p className="hero-description">
              Diversos guias de<br />
              aprendizado na área de<br />
              tecnologia
            </p>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <div className="blue-circle"></div>
            <img src={anonImage} alt="Masked figure" className="masked-figure" />
          </div>
        </section>

        <div data-aos="fade-up">
          <FAQ/>
        </div>
      </main>

      <footer className="footer" data-aos="fade-up">
        <div className="container">
          <p>© 2025 Illusion Society. <br /> Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
