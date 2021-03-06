import React from "react"
import Layout from "../../components/layout"
import Modal from "../../components/modal"
import "../../styles/global.css"
import DATABASE from "../../data/database.json"
import ProjectInfoLayout from "../../components/projInfoLayout"

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
    var description = DATABASE.projects.myGuitarShop.description.map(
      (data, index) => {
        return <p key={index}>{data.para}</p>
      }
    )
    var tehnologies = DATABASE.projects.myGuitarShop.tehnologies.map(
      (data, index) => {
        return <p key={index}>{data.para}</p>
      }
    )
    return (
      <Layout>
        <h3 className="pages--title">My Guitar Shop</h3>
        <ProjectInfoLayout
          gallerySrc={guitarImages[0]}
          onClick={this.showModal}
          descriptionPara={description}
          techPara={tehnologies}
          pageUrl={DATABASE.projects.myGuitarShop.pageUrl}
          gitUrl={DATABASE.projects.myGuitarShop.gitUrl}
        />
        <Modal
          id="guitar-shop-modal"
          modalText="My Guitar shop"
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
