import React from 'react'
import './aidados.css'
import { Link } from 'react-router-dom'

const AiDados = () => {
  return (
    <>
    <div className="roadmap-grid">
     <div className="step">
          <Link to="/roadmaps/ai_e_dados" className='a'>AI e Dados</Link>
        </div>
        </div>
    </>
  )
}

export default AiDados