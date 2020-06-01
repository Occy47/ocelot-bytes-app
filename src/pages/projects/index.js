import React from "react"
import Layout from "../../components/layout"
import ProjCard from "../../components/projCard"

import imageOne from "../../images/my-guitar/modal/LandingPage.png"
import imageTwo from "../../images/my-guitar/modal/HomePage.png"
import imageThree from "../../images/my-guitar/modal/CartPage.png"
import imageFour from "../../images/my-guitar/modal/AdminPage.png"

const images = [imageOne, imageTwo, imageThree, imageFour]

class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <h3 className="pages--title">My Projects</h3>
        <div style={{ marginLeft: 20 }}>
          <ProjCard
            id="my-guitar-card"
            linkId="my-guitar-shopLink"
            title="My-guitar-shop"
            link="/projects/my-guitar-shop"
            images={images}
            pageUrl="https://my-guitar-shop.web.app/"
            gitUrl="https://github.com/Occy47/my-guitar-shop"
          />
        </div>
      </Layout>
    )
  }
}

export default Projects
