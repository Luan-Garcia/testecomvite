import React from 'react'
import './mobiledev.css'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar.jsx'

const MobileDev = () => {
    const steps = [
        { label: 'Desenvolvimento Nativo', path: '/devmobile/nativo' },
        { label: 'Cross-Plataform', path: '/devmobile/cross-plataform' },
        { label: 'MBaaS', path: '/devmobile/mbaas' },
    ];
    return (
        <>
            <NavBar />
            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Desenvolvimento Mobile</p>
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

export default MobileDev