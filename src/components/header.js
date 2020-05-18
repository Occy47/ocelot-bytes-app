import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import image from "../images/ocelot-logo.png"
import eyes from "../images/eyes_logo.png"

import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
    }}
  >
    <div
      className="flex-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontFamily: "Orbitron", maxWidth: 500 }}>
        <Link
          to="/"
          style={{
            color: `lime`,
            textDecoration: `none`,
            margin: 20,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <img
        src={eyes}
        alt="eyes-logo"
        width="466"
        height="200"
        style={{ margin: 20, opacity: 0.08 }}
      ></img>
      <img
        src={image}
        alt="logo"
        width="200"
        height="200"
        style={{ margin: 20 }}
      ></img>
    </div>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
