import React from "react"
import Layout from "../../components/layout"
import Modal from "../../components/modal"
import "../../styles/global.css"

class MyGuitar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      modalIndexL: 0,
    }
    this.showModal = this.showModal.bind(this)
  }

  showModal() {
    var visiblity = this.state.visible
    this.setState({ visible: !visiblity })
  }

  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>My Guitar Shop</h3>
        <div className="flex-container" style={{ display: "flex" }}>
          <div>
            <h4 style={{ fontFamily: "Orbitron" }}>Gallery:</h4>
            <div
              style={{
                fontFamily: "Orbitron",
                border: "1px solid",
                borderColor: "#eaf900",
                backgroundColor: "#00ff0042",
                width: 221,
                height: 221,
                padding: 5,
              }}
            >
              <img
                style={{
                  fontFamily: "Orbitron",
                  border: "1px solid",
                  borderColor: "#eaf900",
                  backgroundColor: "#00ff0042",
                  minWidth: 200,
                  minHeight: 200,
                  position: "relative",
                  top: 5,
                  left: 5,
                }}
                src="..."
                alt="gallery"
                onClick={this.showModal}
              />
            </div>
          </div>
          <div style={{ position: "relative", left: 30 }}>
            <h4 style={{ fontFamily: "Orbitron" }}>Description:</h4>
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
              <p>My Guitar Shop is an example of a web shop application.</p>
              <p>
                It is created in React typescript with Redux for state
                management. Register, Log in and database is handled by Google's
                Firebase.
              </p>
              <p>It has features for sorting, filtering and searching items.</p>
              <p>
                In admin section you can CRUD items from database, view users
                profiles and their shopping history.
              </p>
            </div>
            <h4
              style={{ fontFamily: "Orbitron", position: "relative", top: 20 }}
            >
              Technologies used:
            </h4>
            <div
              style={{
                fontFamily: "Orbitron",
                border: "1px solid",
                borderColor: "#eaf900",
                backgroundColor: "#00ff0042",
                maxWidth: 600,
                padding: 5,
                position: "relative",
                top: 20,
              }}
            >
              <p>* React-typescript</p>
              <p>* Redux</p>
              <p>* Firebase</p>
              <p>* Ant-design</p>
            </div>
            <div style={{ position: "relative", top: 50 }}>
              <button className="links--button">Visit page</button>
              <button className="links--button">Checkout GIT</button>
            </div>
          </div>
        </div>
        <Modal
          id="myModal"
          show={this.state.visible}
          handleClose={this.showModal}
          imgSrc="..."
          imgAlt="image"
        />
      </Layout>
    )
  }
}

export default MyGuitar
