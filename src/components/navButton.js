import React from "react"
import "./navButton.css"

const STYLES = [
  "btn--primary--solid",
  "btn--danger--solid",
  "btn--success--solid",
]

const SIZES = ["btn--small", "btn-medium"]

class NavButton extends React.Component {
  render() {
    const { id, children, onClick, type, buttonStyle, buttonSize } = this.props

    const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1]

    return (
      <button
        id={id}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    )
  }
}

export default NavButton
