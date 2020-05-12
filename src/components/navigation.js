import React from "react"
import NavButton from "./navButton"

class Navigation extends React.Component {
  render() {
    return (
      <div
        style={{
          background: `linear-gradient(to right, grey , black)`,
          paddingLeft: "50px",
        }}
      >
        <NavButton>Home</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>Contact</NavButton>
      </div>
    )
  }
}

export default Navigation
