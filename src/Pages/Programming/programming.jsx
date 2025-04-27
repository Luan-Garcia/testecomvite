import React from 'react';
import { Link } from 'react-router-dom';
import './programming.css'; // Certifique-se de que esse CSS existe
import NavBar from '../Components/NavBar/NavBar.jsx';

const Programming = () => {
    const steps = [
        { label: 'Python', path: '/programação/python' },
        { label: 'Javascript', path: '/programação/javascript' },
        { label: 'C-Like', path: '/programação/c-like' },
        { label: 'R', path: '/programação/r' },
        { label: 'Rust', path: '/programação/rust' },
        { label: 'Java', path: '/programação/java' },
        { label: 'PHP', path: '/programação/php' },
        { label: 'Typescript', path: '/programação/typescript' },
        ];

    return (
        <>
            <NavBar />
            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Roadmaps de Programação</p>
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

export default Programming;
