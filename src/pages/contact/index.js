import React from "react"
import Layout from "../../components/layout"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesList: [],
    }
  }

  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>
          To contact me please...
        </h3>
        {/* <div
          style={{
            border: "1px solid",
            borderColor: "#eaf900",
            backgroundColor: "#00ff0042",
            maxWidth: 600,
            padding: 5,
          }}
        >
          <p>You can send me message</p>
        </div> */}
        <form name="contact" method="POST" data-netlify="true">
          <p style={{ fontFamily: "Orbitron", fontSize: 15 }}>
            <label>
              Your Name:
              <input
                type="text"
                name="name"
                style={{
                  backgroundColor: "#004200",
                  borderStyle: "groove",
                  borderColor: "yellow",
                  borderWidth: 1,
                  color: "lime",
                  position: "relative",
                  left: 5,
                }}
              />
            </label>
          </p>
          <p style={{ fontFamily: "Orbitron", fontSize: 15 }}>
            <label>
              Your Email:
              <input
                type="email"
                name="email"
                style={{
                  backgroundColor: "#004200",
                  borderStyle: "groove",
                  borderColor: "yellow",
                  borderWidth: 1,
                  color: "lime",
                  position: "relative",
                  left: 8,
                }}
              />
            </label>
          </p>
          <p style={{ fontFamily: "Orbitron", fontSize: 15 }}>
            <label>
              Message:
              <textarea
                name="message"
                style={{
                  backgroundColor: "#004200",
                  borderStyle: "groove",
                  borderColor: "yellow",
                  borderWidth: 1,
                  color: "lime",
                  height: 200,
                  width: 400,
                  position: "relative",
                  left: 20,
                }}
              ></textarea>
            </label>
          </p>
          <p style={{ fontFamily: "Orbitron", fontSize: 15 }}>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}

export default Contact
