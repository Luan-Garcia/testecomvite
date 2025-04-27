import React from 'react';
import './homepage.css'; 
import anonImage from '../../img/anon.png'; 
import NavBar from '../../Components/NavBar/NavBar.jsx';
import FAQ from '../../Components/FAQ/FAQ.jsx'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>ILLUSION<br />ROADMAPS</h1>
            <p className="hero-description">
              Diversos guias de<br />
              aprendizado na área de<br />
              tecnologia
            </p>
          </div>
          <div className="hero-image">
            <div className="blue-circle"></div>
            <img src={anonImage} alt="Masked figure" className="masked-figure" />
          </div>
        </section>

      <FAQ/>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Illusion Society. <br /> Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
