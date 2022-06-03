import React from "react"
import PropTypes from "prop-types"

import "./Banner.css"

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <img src={this.props.imgSrc} alt={this.props.altTxt} />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altTxt: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Banner
