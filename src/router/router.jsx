import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Páginas iniciais
import HomePage from '../Pages/Home/HomePage.jsx'
// import RoadmapPage from '../Pages/Home/HomePage';
// Páginas Roadmaps
import DevWebPage from '../Pages/DesenvolvimentoWeb/WebDs.jsx';  
import AieDadosPage from '../Pages/AiDados/DadosAi.jsx'; 
import CyberSecurityPage from '../Pages/SecurityCyber/CyberSec.jsx'; 
import DatabasePage from '../Pages/DatabaseD/Database.jsx';
import InfraRedes from '../Pages/InfraRedes/InfraRedes.jsx';
import GameDev from '../Pages/GameDev/gamedev.jsx';
import Programming from '../Pages/Programming/programming.jsx';
import Inovaçoes from '../Pages/InovaçõesTech/inovaçoes.jsx';
import Hardware from '../Pages/Hardware/hardware.jsx';
import SisOperacional from '../Pages/sistemas_operacionais/sistemasoperacionais.jsx';
import MobileDev from '../Pages/mobiledev/mobiledev.jsx';
// Páginas Cybersec
// import Redteam from './Pages/SecurityCyber/areas/RedTeam/redteam.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/roadmaps" element={<RoadmapPage />} /> */}
                <Route path="/roadmaps/web" element={<DevWebPage />} />
                <Route path="/roadmaps/ai_e_dados" element={<AieDadosPage />} />
                <Route path="/roadmaps/cybersecurity" element={<CyberSecurityPage />} />
                <Route path="/roadmaps/dbs" element={<DatabasePage />} />
                <Route path="/roadmaps/infra_e_redes" element={<InfraRedes />} />
                <Route path="/roadmaps/gamedev" element={<GameDev />} />
                <Route path="/roadmaps/programação" element={<Programming />} />
                <Route path="/roadmaps/inovações" element={<Inovaçoes />} />
                <Route path="/roadmaps/hardware" element={<Hardware />} />
                <Route path="/roadmaps/sistemas_operacionais" element={<SisOperacional />} />
                <Route path="/roadmaps/devmobile" element={<MobileDev />} />
                {/* <Route path="cybersecurity/redteam" element={<Redteam />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
