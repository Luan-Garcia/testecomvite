import React from 'react'
import './devgames.css'
import { Link } from 'react-router-dom';

const GameDev = () => {
  return (
    <>
      <div className="roadmap-grid">
        <div className="step">
          <Link to="/roadmaps/gamedev">Game Development</Link>
        </div>
      </div>
    </>
  )
};

export default GameDev;