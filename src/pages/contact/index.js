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
        <h3 className="pages--title">To contact me please...</h3>
        <form name="contact" method="POST" data-netlify="true">
          <p style={{ fontFamily: "Orbitron", fontSize: 15 }}>
            <label>
              Your Name:
              <input
                type="text"
                name="name"
                className="pages--text--box"
                style={{
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
                className="pages--text--box"
                style={{
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
                className="pages--text--box"
                style={{
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
            <button
              className="links--button"
              type="submit"
              style={{ position: "relative", left: 112 }}
            >
              Send
            </button>
          </p>
        </form>
      </Layout>
    )
  }
}

export default Contact
