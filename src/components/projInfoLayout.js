import React from "react"

class ProjectInfoLayout extends React.Component {
  render() {
    return (
      <div className="flex-container" style={{ display: "flex" }}>
        <div>
          <h4 style={{ fontFamily: "Orbitron", marginLeft: 20 }}>Gallery:</h4>
          <div className="pages--text--box" style={{ width: 301, height: 221 }}>
            <img
              style={{
                fontFamily: "Orbitron",
                border: "1px solid",
                borderColor: "#eaf900",
                backgroundColor: "#00ff0042",
                width: 290,
                height: 200,
                position: "relative",
                top: 5,
                cursor: "pointer",
              }}
              src={this.props.gallerySrc}
              alt="gallery"
              onClick={this.props.onClick}
            />
          </div>
        </div>
        <div style={{ position: "relative", left: 30 }}>
          <h4 style={{ fontFamily: "Orbitron" }}>Description:</h4>
          <div className="pages--text--box">{this.props.descriptionPara}</div>
          <h4 style={{ fontFamily: "Orbitron", position: "relative", top: 20 }}>
            Technologies used:
          </h4>
          <div
            className="pages--text--box"
            style={{ position: "relative", top: 20 }}
          >
            {this.props.techPara}
          </div>
          <div style={{ position: "relative", top: 50 }}>
            <a href={this.props.pageUrl}>
              <button className="links--button">Visit page</button>
            </a>
            <a href={this.props.gitUrl}>
              <button className="links--button">Checkout GIT</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectInfoLayout
