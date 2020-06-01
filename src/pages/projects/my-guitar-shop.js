import React from "react"
import Layout from "../../components/layout"
import Modal from "../../components/modal"
import "../../styles/global.css"

import imageOne from "../../images/my-guitar/modal/LandingPage.png"
import imageTwo from "../../images/my-guitar/modal/HomePage.png"
import imageThree from "../../images/my-guitar/modal/CartPage.png"
import imageFour from "../../images/my-guitar/modal/AdminPage.png"

var guitarImages = [imageOne, imageTwo, imageThree, imageFour]

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
        <h3 className="pages--title">My Guitar Shop</h3>
        <div className="flex-container" style={{ display: "flex" }}>
          <div>
            <h4 style={{ fontFamily: "Orbitron" }}>Gallery:</h4>
            <div
              className="pages--text--box"
              style={{ width: 301, height: 221 }}
            >
              <img
                style={{
                  fontFamily: "Orbitron",
                  border: "1px solid",
                  borderColor: "#eaf900",
                  backgroundColor: "#00ff0042",
                  minWidth: 280,
                  minHeight: 200,
                  position: "relative",
                  top: 5,
                  cursor: "pointer",
                }}
                src={guitarImages[0]}
                alt="gallery"
                onClick={this.showModal}
              />
            </div>
          </div>
          <div style={{ position: "relative", left: 30 }}>
            <h4 style={{ fontFamily: "Orbitron" }}>Description:</h4>
            <div className="pages--text--box">
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
              className="pages--text--box"
              style={{ position: "relative", top: 20 }}
            >
              <p>* React-typescript</p>
              <p>* Redux</p>
              <p>* Firebase</p>
              <p>* Ant-design</p>
            </div>
            <div style={{ position: "relative", top: 50 }}>
              <a href="https://my-guitar-shop.web.app/">
                <button className="links--button">Visit page</button>
              </a>
              <a href="https://github.com/Occy47/my-guitar-shop">
                <button className="links--button">Checkout GIT</button>
              </a>
            </div>
          </div>
        </div>
        <Modal
          id="myModal"
          show={this.state.visible}
          handleClose={this.showModal}
          imgAlt="image"
          images={guitarImages}
        />
      </Layout>
    )
  }
}

export default MyGuitar
