import React from "react"
import "./Footer.css"
import logo from "../../assets/logo-footer.svg"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className="logo-Footer">
          <img src={logo} alt="logo de Kasa" />
        </p>

        <p className="copyright">© 2022 Kasa. All rights reserved</p>
      </footer>
    )
  }
}
