import React from 'react'
import './devMobile.css'
import { Link } from 'react-router-dom';

const DevMobile = () => {
  return (
    <>
      <div className="roadmap-grid">
        <div className="step">
          <Link to="/roadmaps/devmobile">Mobile Development</Link>
        </div>
      </div>
    </>
  )
};

export default DevMobile;