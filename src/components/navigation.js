import React from "react"
import NavButton from "./navButton"
import { Link } from "gatsby"
import "./navButton.css"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeOne: "",
      activeTwo: "",
      buttons: null,
    }
    this.setParentClassToChild = this.setParentClassToChild.bind(this)
  }

  componentDidMount() {
    this.setParentClassToChild()
  }

  setParentClassToChild() {
    var links = document.getElementById("navbar")
    var activeLink = links.getElementsByClassName("active")

    var btns = document.getElementsByClassName("btn")

    if (window.location.pathname === "/projects/my-guitar-shop") {
      console.log("do nothing")
    } else {
      var i
      for (i = 0; i < btns.length; i++) {
        if (`${btns[i].id}Link` === activeLink[0].id) {
          btns[i].className += " active"
        } else {
          btns[i].className = btns[i].className.replace(" active", "")
        }
      }
    }
  }

  render() {
    return (
      <div
        id="navbar"
        style={{
          background: `linear-gradient(to right, grey , black)`,
          paddingLeft: "50px",
        }}
      >
        <Link id="homeLink" to="/" activeClassName="active">
          <NavButton id={"home"}>Home</NavButton>
        </Link>
        <Link id="aboutLink" to="/about" activeClassName="active">
          <NavButton id={"about"}>About</NavButton>
        </Link>
        <Link id="projectsLink" to="/projects" activeClassName="active">
          <NavButton id={"projects"}>Projects</NavButton>
        </Link>
        <Link id="contactLink" to="/contact" activeClassName="active">
          <NavButton id={"contact"}>Contact</NavButton>
        </Link>
      </div>
    )
  }
}

export default Navigation
