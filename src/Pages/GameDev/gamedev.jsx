import React from 'react';
import { Link } from 'react-router-dom';
import './gamedev.css'; // Certifique-se de que esse CSS existe
import NavBar from '../Components/NavBar/NavBar.jsx';

const GameDev = () => {
    const steps = [
        { label: 'Programação', path: '/gamedev/programação' },
        { label: 'Design', path: '/gamedev/design' },
        { label: 'Arte e Animação', path: '/gamedev/arte_e_animação' },
    ];

    return (
        <>
            <NavBar />
            <div class="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Desenvolvimento de Jogos</p>
            </div>
            <div className="roadmap-grid">
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <Link to={step.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {step.label}
                        </Link>
                    </div>
                ))}
            </div>
        </>

    );
};

export default GameDev;
