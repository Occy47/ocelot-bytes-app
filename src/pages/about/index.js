import React from "react"
import Layout from "../../components/layout"

class About extends React.Component {
  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>About me...</h3>
        <div
          style={{
            border: "1px solid",
            borderColor: "#eaf900",
            backgroundColor: "#00ff0042",
            maxWidth: 600,
            padding: 5,
          }}
        >
          <p>My name is ... .....</p>
        </div>
      </Layout>
    )
  }
}

export default About
