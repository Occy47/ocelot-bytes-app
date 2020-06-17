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
    this.setState({ imageIndex: 0 })
    console.log("event stopped")
  }

  changeImageSrc() {
    var i = this.state.imageIndex
    var imgLen = this.props.images.length - 1

    if (i >= imgLen) {
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
              style={{
                height: "100%",
                height: "100%",
              }}
            />
          </Link>
        </div>
        <div className="card--title">{this.props.title}</div>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            top: 20,
          }}
        >
          <a href={this.props.pageUrl}>
            <button className="card--button">Visit page</button>
          </a>
          <a href={this.props.gitUrl}>
            <button className="card--button">Check GIT</button>
          </a>
        </div>
      </div>
    )
  }
}

export default ProjCard
