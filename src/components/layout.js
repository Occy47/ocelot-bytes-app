/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"

const height = window.innerHeight - 270 + "px"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="layout"
        style={{
          margin: `0 auto`,
          minHeight: "100%",
          padding: `0 1.0875rem 1.45rem`,
          background: `black`,
          color: `lime`,
        }}
      >
        <main>{children}</main>
        <footer style={{ textAlign: "center", position: "relative", top: 200 }}>
          © {new Date().getFullYear()}, Ocelot bytes
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
