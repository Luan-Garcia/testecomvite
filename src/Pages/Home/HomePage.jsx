import React from 'react';
import './homepage.css';
import DsWeb from '../Components/DesenvolvimentoWeb/DsWeb';
import AiDados from '../Components/AiDados/AiDados';
import CyberSecurity from '../Components/CyberSecurity/CyberSecurity';
import BancoDados from '../Components/BancoDeDados/BancoDados';
import InfraRedes from '../Components/InfraeRedes/infraeredes';
import GameDevelop from '../Components/DevGames/GameDevelop';
import Dados from '../Components/Dados/Dados';
import TecEmergentes from '../Components/TecEmergentes/TecEmergentes';
import SisOperacional from '../Components/SistemasOperacionais/sistemaoperacional';
import DevMobile from '../Components/DevMobile/DevMobile';
import Hardware from '../Components/Hardware/Hardware';
import NavBar from '../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <>
      <NavBar/>

      <div className="main-title">
        <h1>Illusion Roadmaps</h1>
        <p>Diversos guias de aprendizado na área de tecnologia</p>
      </div>

      <div className="roadmap-grid" style={{gap: '2px'}}>
      <Link to="/roadmaps/web"><DsWeb /></Link>
      <Link to="/roadmaps/ai_e_dados"><AiDados /></Link>
      <Link to="/roadmaps/cybersecurity"><CyberSecurity /></Link>
      <Link to="/roadmaps/dbs"><BancoDados /></Link>
      <Link to="/roadmaps/infra_e_redes"><InfraRedes /></Link>
      <Link to="/roadmaps/gamedev"><GameDevelop /></Link>
      <Link to="/roadmaps/programação"><Dados /></Link>
      <Link to="/roadmaps/inovações"><TecEmergentes /></Link>
      <Link to="/roadmaps/sistemas_operacionais"><SisOperacional /></Link>
      <Link to="/roadmaps/devmobile"><DevMobile /></Link>
      <Link to="/roadmaps/hardware"><Hardware /></Link>
      </div>
    </>
  );
};

export default HomePage;
