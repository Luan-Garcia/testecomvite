import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import CadastroPage from '../../CadastroPage/CadastroPage.jsx'; // importa o componente popup
import CadastroPage from '../../Pages/CadastroPage/CadastroPage.jsx'
import './navbar.css';
// import Logo from '../../../img/logo-is.png';
import Logo from '../../img/logo-is.png'

const NavBar = () => {
    const [showCadastro, setShowCadastro] = useState(false);
    const [loading, setLoading] = useState(false); // Estado para controlar a tela de loading
    const navigate = useNavigate(); // Hook para navegação

    const abrirCadastro = () => {
        console.log("Clicou em cadastre-se");
        setShowCadastro(true);
        document.body.style.overflow = 'hidden';
    };

    const fecharCadastro = () => {
        setShowCadastro(false);
        document.body.style.overflow = 'auto';
    };

    const handleRoadmapsClick = () => {
        if (window.location.pathname !== '/roadmaps') {
            setLoading(true);
            setTimeout(() => {
                navigate('/roadmaps');
                setLoading(false); 
            });
        }
    };

    const handleLogoClick = () => {
        if (window.location.pathname !== '/') {
            setLoading(true);
            setTimeout(() => {
                navigate('/');
                setLoading(false); 
            });
        }
    };

    return (
        <>
            <header>
                <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src={Logo} alt="Illusion Roadmaps" className="logo-img" />
                </div>

                <nav>
                    <Link to="/roadmaps" onClick={handleRoadmapsClick}>Roadmaps</Link>
                    <Link to="https://discord.gg/V8H56EnPSc">Comunidade</Link>
                    <Link to="/devs">Desenvolvedores</Link>
                </nav>

                <div className="auth-buttons">
                    <button onClick={abrirCadastro}>Cadastre-se</button>
                    <button>Acessar minha conta</button>
                </div>
            </header>


            {/* Exibe a tela de loading */}
            {loading && (
                <div className="loading-screen">
                    <p>Carregando...</p>
                    <div className="spinner"></div> {/* Um simples spinner */}
                </div>
            )}

            {/* Componente popup de cadastro */}
            <CadastroPage show={showCadastro} onClose={fecharCadastro} />
        </>
    );
};

export default NavBar;
