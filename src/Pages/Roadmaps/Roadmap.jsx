import React, { useEffect } from 'react';
import './roadmap.css';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import AOS from 'aos'; // Importa o JS do AOS

import DsWeb from '../../Components/DesenvolvimentoWeb/DsWeb';
import AiDados from '../../Components/AiDados/AiDados';
import CyberSecurity from '../../Components/CyberSecurity/CyberSecurity';
import BancoDados from '../../Components/BancoDeDados/BancoDados';
import GameDevelop from '../../Components/DevGames/GameDevelop';
import Dados from '../../Components/Dados/Dados';
import TecEmergentes from '../../Components/TecEmergentes/TecEmergentes';
import DevMobile from '../../Components/DevMobile/DevMobile';
import Hardware from '../../Components/Hardware/Hardware';
import NavBar from '../../Components/NavBar/NavBar';

const Roadmap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavBar/>

      <div className="main-title" data-aos="fade-down">
        <h1>Illusion Roadmaps</h1>
        <p>Diversos guias de aprendizado na área de tecnologia</p>
      </div>

      <div className="roadmap-grid" style={{gap: '2px'}}>
          <div data-aos="fade-up"><DsWeb/></div>
          <div data-aos="fade-up" data-aos-delay="100"><AiDados/></div>
          <div data-aos="fade-up" data-aos-delay="200"><CyberSecurity/></div>
          <div data-aos="fade-up" data-aos-delay="300"><BancoDados/></div>
          {/* <CloudComputing/> */}
          <div data-aos="fade-up" data-aos-delay="400"><GameDevelop/></div>
          <div data-aos="fade-up" data-aos-delay="500"><Dados/></div>
          <div data-aos="fade-up" data-aos-delay="600"><TecEmergentes/></div>
          {/* <SisEmbarque/> */}
          <div data-aos="fade-up" data-aos-delay="700"><DevMobile/></div>
          <div data-aos="fade-up" data-aos-delay="800"><Hardware/></div>
      </div>
    </>
  );
};

export default Roadmap;
