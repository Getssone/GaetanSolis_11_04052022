import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/logo.svg"
class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img className="logo-Header" src={logo} alt="logo de Kasa" />
        </Link>
        <nav className="nav-Header">
          <NavLink className="links1" activeClassName="selected" exact to="/">
            Accueil
          </NavLink>

          <NavLink className="links2" activeClassName="selected" to="/about">
            À propos
          </NavLink>
        </nav>
      </header>
    )
  }
}

export default Header
