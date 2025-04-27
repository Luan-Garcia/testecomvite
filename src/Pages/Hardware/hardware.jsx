import React from 'react'
import './hardware.css'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar.jsx'


const Hardware = () => {
    const steps = [
        { label: 'Componentes', path: '/hardware/componentes' },
        { label: 'Sistemas Embarcados', path: '/hardware/sistemas_embarcados' },
        { label: 'Circuitos', path: '/hardware/circuitos' },
    ];
    return (
        <>
            <NavBar />
            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Hardware</p>
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

export default Hardware