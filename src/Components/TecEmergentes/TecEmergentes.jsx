import React from 'react'
import './tecemergentes.css'
import { Link } from 'react-router-dom';

const InovaçoesTech = () => {
  return (
    <>
      <div className="roadmap-grid">
        <div className="step">
          <Link to="/roadmaps/inovações">Inovações Tech</Link>
        </div>
      </div>
    </>
  )
};

export default InovaçoesTech;