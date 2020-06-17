import React from "react"
import Layout from "../../components/layout"
import DATABASE from "../../data/database.json"
import ProjectInfoLayout from "../../components/projInfoLayout"

import noImage from "../../images/eyes_logo_projCard.png"

class OcelotBytes extends React.Component {
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
    var description = DATABASE.projects.ocelotBytes.description.map(
      (data, index) => {
        return <p key={index}>{data.para}</p>
      }
    )
    var tehnologies = DATABASE.projects.ocelotBytes.tehnologies.map(
      (data, index) => {
        return <p key={index}>{data.para}</p>
      }
    )

    return (
      <Layout>
        <h3 className="pages--title">Ocelot bytes</h3>
        <ProjectInfoLayout
          gallerySrc={noImage}
          onClick={this.showModal}
          descriptionPara={description}
          techPara={tehnologies}
          pageUrl={DATABASE.projects.ocelotBytes.pageUrl}
          gitUrl={DATABASE.projects.ocelotBytes.gitUrl}
        />
      </Layout>
    )
  }
}

export default OcelotBytes
