import React from 'react';
import { Link } from 'react-router-dom';
import './sistemas_operacionais.css'; // Certifique-se de que esse CSS existe
import NavBar from '../Components/NavBar/NavBar.jsx';

const SistemasOperacionais = () => {
    const steps = [
        { label: 'Desktop', path: '/sistemas_operacionais/desktop' },
        { label: 'Mobile', path: '/sistemas_operacionais/mobile' },
        { label: 'Servidores', path: '/sistemas_operacionais/servidor' },
    ];

    return (
        <>
            <NavBar />
            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Cibersegurança</p>
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

export default SistemasOperacionais;
