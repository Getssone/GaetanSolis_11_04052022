import React from "react"
import PropTypes from "prop-types"
import "./Carrousel.css"

export default class Carrousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImageIndex: 0,
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    this.setState({
      currentImageIndex: index,
    })
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index,
    })
  }

  render() {
    return (
      <div className="carrousel">
        <div className="image-zoom">
          <img
            className="img-Carrousel"
            src={this.props.imgUrls[this.state.currentImageIndex]}
            alt={this.state.currentImageIndex}
          />
        </div>

        <p className="compt">
          {this.state.currentImageIndex + 1}/{this.props.imgUrls.length}
        </p>
        {this.props.imgUrls.length > 1 ? (
          <div>
            <i
              className="fas fa-chevron-left"
              onClick={() => this.previousSlide()}
            ></i>
            <i
              className="fas fa-chevron-right"
              onClick={() => this.nextSlide()}
            ></i>
          </div>
        ) : (
          ""
        )}
      </div>
    )
  }
}
Carrousel.propTypes = {
  imgUrls: PropTypes.arrayOf(PropTypes.string),
}
