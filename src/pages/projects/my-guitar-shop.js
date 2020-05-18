import React from "react"
import Layout from "../../components/layout"

class MyGuitar extends React.Component {
  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>My Guitar Shop</h3>
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
          <p>My Guitar Shop is a simple example of a web shop app.</p>
        </div>
      </Layout>
    )
  }
}

export default MyGuitar
