import React from "react"
import Layout from "../../components/layout"

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>
          To contact me please...
        </h3>
        <div
          style={{
            border: "1px solid",
            borderColor: "#eaf900",
            backgroundColor: "#00ff0042",
            maxWidth: 600,
            padding: 5,
          }}
        >
          <p>You can send me message</p>
        </div>
      </Layout>
    )
  }
}

export default Contact
