import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import AOS from 'aos'; // Importa o JS do AOS

const Database = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavBar />
      <div className="main-title" data-aos="fade-down">
        <h1>Illusion Roadmaps</h1>
        <p>Roadmaps de Banco de Dados</p>
      </div>

      <div className="roadmap-grid">
        <div className="step" data-aos="fade-up" data-aos-delay="100">
          <Link to="/dbs/relacionais" style={{ color: 'inherit', textDecoration: 'none' }}>
            Relacionais
          </Link>
        </div>
        <div className="step" data-aos="fade-up" data-aos-delay="200">
          <Link to="/dbs/não_relacionais" style={{ color: 'inherit', textDecoration: 'none' }}>
            Não Relacionais
          </Link>
        </div>
        <div className="step" data-aos="fade-up" data-aos-delay="300">
          <Link to="/dbs/outros" style={{ color: 'inherit', textDecoration: 'none' }}>
            Outros
          </Link>
        </div>
      </div>
    </>
  );
};

export default Database;
