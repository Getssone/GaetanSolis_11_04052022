import React from "react"
import PropTypes from "prop-types"
import "./Collapse.css"

export default class Collapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClosed: true }
    this.openCollapse = this.openCollapse.bind(this)
  }

  openCollapse() {
    this.setState({ isClosed: !this.state.isClosed })
  }

  render() {
    return (
      <div
        className={`collapse collapse${
          this.state.isClosed ? "-closed" : "-open"
        }`}
      >
        <div className="collapse-title" onClick={this.openCollapse}>
          <h2>{this.props.title}</h2>
          <i
            className={`fas  ${
              this.state.isClosed ? "fa-chevron-down" : "fa-chevron-up"
            }`}
          ></i>
        </div>
        {typeof this.props.content === "string" ? (
          <p
            className={`collapse-content${
              this.state.isClosed ? "_closed" : "_open"
            }`}
          >
            {this.props.content}
          </p>
        ) : (
          <ul
            className={`collapse-content${
              this.state.isClosed ? "_closed" : "_open"
            }`}
          >
            {this.props.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
}
