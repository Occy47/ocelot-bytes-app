import React from "react"
import Layout from "../../components/layout"
import ProjCard from "../../components/projCard"

import imageOne from "../../images/test/test_1.png"
import imageTwo from "../../images/test/test_2.png"
import imageThree from "../../images/test/test_3.png"

const test = "Hello"
const images = [imageOne, imageTwo, imageThree]
var myInterval

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageGallery: [imageOne, imageTwo, imageThree],
      imageSrc: imageTwo,
      imageIndex: 0,
    }
    this.changeImageSrc = this.changeImageSrc.bind(this)
    this.myFunction = this.myFunction.bind(this)
    this.clearMyFunction = this.clearMyFunction.bind(this)
  }

  componentDidMount() {
    var el = document.getElementById("my-guitar")
    var clrEl = document.getElementById("my-guitar")

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
    var el = document.getElementById("my-guitar")
    var clrEl = document.getElementById("my-guitar")

    el.removeEventListener("mouseover", this.myFunction)
    clrEl.removeEventListener("mouseout", this.clearMyFunction)
  }

  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>My Projects</h3>
        <ProjCard
          id="my-guitar"
          title={test}
          link={"/projects/my-guitar-shop"}
          imageSrc={images[this.state.imageIndex]}
        />
      </Layout>
    )
  }
}

export default Projects
