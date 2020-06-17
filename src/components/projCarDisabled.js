import React from "react"
import "./projCardDisabled.css"
import eyesImage from "../images/eyes_logo_projCard.png"

class ProjCardDisabled extends React.Component {
  render() {
    return (
      <div className="card--dis">
        <div className="card--image--dis">
          <img
            src={eyesImage}
            alt="desc"
            style={{ height: "-webkit-fill-available" }}
          />
        </div>
        <div className="card--title--dis">Future project</div>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            top: 20,
          }}
        >
          <button className="card--button--dis" disabled>
            Visit page
          </button>
          <button className="card--button--dis" disabled>
            Check GIT
          </button>
        </div>
      </div>
    )
  }
}

export default ProjCardDisabled
