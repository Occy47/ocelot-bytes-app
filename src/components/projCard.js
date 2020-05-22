import React from "react"
import { Link } from "gatsby"
import "./projCard.css"

var myInterval

class ProjCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageIndex: 0,
    }
    this.changeImageSrc = this.changeImageSrc.bind(this)
    this.myFunction = this.myFunction.bind(this)
    this.clearMyFunction = this.clearMyFunction.bind(this)
  }

  componentDidMount() {
    var el = document.getElementById(this.props.id)
    var clrEl = document.getElementById(this.props.id)

    el.addEventListener("mouseover", this.myFunction)
    clrEl.addEventListener("mouseout", this.clearMyFunction)
  }

  myFunction() {
    myInterval = setInterval(() => {
      this.changeImageSrc()
    }, 850)
  }

  clearMyFunction() {
    clearInterval(myInterval)
    console.log("event stopped")
  }

  changeImageSrc() {
    var i = this.state.imageIndex
    if (i >= 2) {
      this.setState({ imageIndex: 0 })
    } else {
      i++
      this.setState({ imageIndex: i })
    }
    console.log("event triggered")
  }

  componentWillUnmount() {
    var el = document.getElementById(this.props.id)
    var clrEl = document.getElementById(this.props.id)

    el.removeEventListener("mouseover", this.myFunction)
    clrEl.removeEventListener("mouseout", this.clearMyFunction)
  }

  render() {
    return (
      <div id={this.props.id} className="card">
        <div className="card--image">
          <Link id={this.props.linkId} to={this.props.link}>
            <img
              src={this.props.images[this.state.imageIndex]}
              onClick={this.clearMyFunction}
              alt="desc"
            />
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
