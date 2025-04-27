import React from 'react'
import './infraredes.css'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar.jsx'

const InfraRedes = () => {
    const steps = [
        { label: 'Infraestrutura', path: '/infra_e_redes/infraestrutura' },
        { label: 'Cloud Computing', path: '/infra_e_redes/cloud_computing' },
        { label: 'Redes', path: '/infra_e_redes/networking' },
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

export default InfraRedes
