import React from 'react';
import { Link } from 'react-router-dom';
import './dsweb.css'; // Certifique-se de que esse CSS existe
import NavBar from '../Components/NavBar/NavBar.jsx';

const WebDs = () => {
    const steps = [
        { label: 'Front-End', path: '/web/frontend' },
        { label: 'Back-End', path: '/web/backend' },
        { label: 'Desenvolvimento de APIs', path: '/web/apis' },
        { label: 'UI/UX Design', path: '/web/design' },
    ];

    return (
        <>
            <NavBar />
            <div class="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Desenvolvimento Web</p>
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

export default WebDs;
