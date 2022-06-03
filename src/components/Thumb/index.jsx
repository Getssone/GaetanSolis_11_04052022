import React from "react"
import PropTypes from "prop-types"
import { Link} from "react-router-dom"
import "./Thumb.css"

export default class Thumb extends React.Component {
  render() {
    const { title, src, location, id } = this.props
    return (
      <div className="thumb">
        <div className="hoverThumb">
          <Link to={`/house/${id}`} title={title} className="link-Thumb">
            <div className="cover-Thumb">
              <img src={src} alt={`${title} en ${location}`} />
            </div>
            <div className="filter"></div>
          </Link>
        </div>
        <h2 className="title-Thumb">{title}</h2>
      </div>
    )
  }
}

Thumb.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}
