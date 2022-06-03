import React from "react"
import { Link } from "react-router-dom"
import "./error.css"

function Error(){ 
    return (
      <main className="Error">
        <p className="Error-code">404</p>

        <p className="Error-message">
          Oups ! La page que vous demandez n'existe pas.
        </p>

        <p className="Error-back-link">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </p>
      </main>
    )
  }
export default Error;