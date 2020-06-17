import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h3 className="pages--title">What is it?</h3>
        <div className="pages--text--box">
          <p>
            Ocelot bytes is a "one man band" with an idea of front-end web
            development.
          </p>
          <p>
            Primary programing language that I use is Javascript with focus on
            React (Gatsby.js), Redux and Google's Firebase.
          </p>
          <p>
            Future plans are to continue developing my skills in React, and to
            learn new programing languages (most likely React Native and C#).
          </p>
        </div>
        <div
          className="flex-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link
            to="/about"
            style={{
              marginTop: 100,
              marginBottom: 50,
            }}
          >
            <button className="links--button">More...</button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Home
