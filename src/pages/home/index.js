import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import NavButton from "../../components/navButton"

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>What is it?</h3>
        <div
          style={{
            fontFamily: "Orbitron",
            border: "1px solid",
            borderColor: "#eaf900",
            backgroundColor: "#00ff0042",
            maxWidth: 600,
            padding: 5,
          }}
        >
          <p>
            Ocelot bytes is a "one man band" front-end web development factory.
          </p>
          <p>
            Primary programing language that I use is javascript with focus on
            React (Gatsby.js), Redux and Google's Firebase.
          </p>
          <p>
            Future plans are to continue developing my skills in javascript, and
            to learn new programing languages (most likely React Native and C#).
          </p>
        </div>
        <div
          className="flex-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link
            to="/about"
            style={{
              position: "relative",
              top: 60,
            }}
          >
            <NavButton>More...</NavButton>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Home
