import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar.jsx';

const Database = () => {
  return (
    <>
    <NavBar/>
     <div className="main-title">
        <h1>Illusion Roadmaps</h1>
        <p>Roadmaps de Banco de Dados</p>
      </div>

      <div className="roadmap-grid">
        <div className="step">
          <Link to="/dbs/relacionais" style={{ color: 'inherit', textDecoration: 'none' }}>
            Relacionais
          </Link>
        </div>
        <div className="step">
          <Link to="/dbs/não_relacionais" style={{ color: 'inherit', textDecoration: 'none' }}>
            Não Relacionais
          </Link>
        </div>
        <div className="step">
          <Link to="/dbs/outros" style={{ color: 'inherit', textDecoration: 'none' }}>
            Outros
          </Link>
        </div>
      </div>
    </>
  )
}

export default Database
