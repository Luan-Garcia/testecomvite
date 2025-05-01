import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './aidados.css';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import AOS from 'aos'; // Importa o JS do AOS
import NavBar from '../../Components/NavBar/NavBar.jsx';

const DadosAi = () => {
    const steps = [
        { label: 'AI', path: '/ai_e_dados/ai' },
        { label: 'Ciência de Dados', path: '/ai_e_dados/ciencia_de_dados' },
        { label: 'Big Data', path: '/ai_e_dados/big_data' },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <NavBar />

            <div className="main-title" data-aos="fade-down">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Inteligência Artificial e Dados</p>
            </div>

            <div className="roadmap-grid">
                {steps.map((step, index) => (
                    <div
                        className="step"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`}
                    >
                        <Link to={step.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {step.label}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DadosAi;
