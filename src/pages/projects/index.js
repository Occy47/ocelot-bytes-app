import React from "react"
import Layout from "../../components/layout"
import ProjCard from "../../components/projCard"

import imageOne from "../../images/test/test_1.png"
import imageTwo from "../../images/test/test_2.png"
import imageThree from "../../images/test/test_3.png"

const images = [imageOne, imageTwo, imageThree]

class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>My Projects</h3>
        <ProjCard
          id="my-guitar-card"
          linkId="my-guitar-shopLink"
          title="My-guitar-shop"
          link="/projects/my-guitar-shop"
          images={images}
        />
      </Layout>
    )
  }
}

export default Projects
