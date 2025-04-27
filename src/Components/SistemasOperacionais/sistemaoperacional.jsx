import React from 'react'
import './sistemaoperacional.css'
import { Link } from 'react-router-dom';

const SistemasOperacionais = () => {
  return (
    <>
      <div className="roadmap-grid">
        <div className="step">
          <Link to="/roadmaps/sistemas_operacionais">Sistemas Operacionais</Link>
        </div>
      </div>
    </>
  )
};

export default SistemasOperacionais;