import React from "react"
import "./Galery.css"
import Thumb from "../Thumb"
export default class Galery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      datas: [],
    }
  }

  componentDidMount() {
    fetch("datas.json")
      .then((response) => response.json())
      .then(
        (jsonResponse) => {
          if (jsonResponse) {
            this.setState({
              datas: jsonResponse,
            })
          }
          
        },
        (error) => {
          this.setState({ error })
        }
      )
  }
  render() {
    const { error, datas } = this.state
    if (error) {
      return (
        <div className="nodatas">
          Impossible de charger les données.
        </div>
      )
    } else {
      return (
        <section className="galery">
          {datas.map((item) => (
            <article key={`thumb-${item.id}`} className="thumbs">
              <Thumb
                title={item.title}
                src={item.cover}
                id={item.id}
                location={item.location}
              />
            </article>
          ))}
        </section>
      )
    }
  }
}
