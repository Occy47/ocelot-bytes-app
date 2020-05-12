import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import image from "../images/ocelot-logo.png"

import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontFamily: "Orbitron", maxWidth: 500 }}>
        <Link
          to="/"
          style={{
            color: `lime`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <img
          src={image}
          width="200"
          height="200"
          style={{ float: "right" }}
        ></img>
      </h1>
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
