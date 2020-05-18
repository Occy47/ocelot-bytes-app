import React from "react"
import { Link } from "gatsby"
import "./projCard.css"

class ProjCard extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="card">
        <div className="card--image">
          <Link to={this.props.link}>
            <img src={this.props.imageSrc} alt="desc" />
          </Link>
        </div>
        <div
          style={{
            fontFamily: "Orbitron",
            textAlign: "center",
            position: "relative",
            top: 15,
          }}
        >
          {this.props.title}
        </div>
        <div
          className="flexbox-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            top: 20,
          }}
        >
          <button className="card--button">Visit page</button>
          <button className="card--button">Check GIT</button>
        </div>
      </div>
    )
  }
}

export default ProjCard
