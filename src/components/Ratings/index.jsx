import React from "react"
import PropTypes from "prop-types"
import "./Ratings.css"
import redStar from "../../assets/redStar.svg"
import greyStar from "../../assets/greyStar.svg"

export default class Ratings extends React.Component {
  render() {
    const { numberOfStars } = this.props
    const stars = []

    for (let i = 1; i <= 5; i++) {
      i <= numberOfStars ? stars.push("red") : stars.push("grey")
    }

    return (
      <div className="stars">
        {stars.map((star, i) =>
          star === "red" ? (
            <div key={i} className="redStar">
              <img src={redStar} alt="red star" />
            </div>
          ) : (
            <div key={i} className="greyStar">
              <img src={greyStar} alt="grey star" />
            </div>
          )
        )}
      </div>
    )
  }
}

Ratings.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
}
