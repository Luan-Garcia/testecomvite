import React from 'react'
import './hardware.css'
import { Link } from 'react-router-dom';

const Hardware = () => {
  return (
    <>
      <div className="roadmap-grid">
        <div className="step">
          <Link to="/roadmaps/hardware">Hardware</Link>
        </div>
      </div>
    </>
  )
};

export default Hardware;