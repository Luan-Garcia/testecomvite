import React from 'react'
import './inovaçoes.css'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar.jsx'

const InovaçoesTech = () => {
    const steps = [
        { label: 'Computação Quântica', path: '/inovações/computação_quântica' },
        { label: 'Biotecnologia', path: '/inovações/biotecnologia' },
        { label: 'Blockchain', path: '/inovações/blockchain' },
        { label: 'Neurotecnologia', path: '/inovações/neurotecnologia' },
        { label: 'Realidade Extendida', path: '/inovações/xr' },
    ];
    return (
        <>
            <NavBar />
            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Infraestrutura e Redes</p>
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
    )
}

export default InovaçoesTech