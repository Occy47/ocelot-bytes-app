import React from "react"
import Layout from "../../components/layout"
import Modal from "../../components/modal"
import DATABASE from "../../data/database.json"
import ProjectInfoLayout from "../../components/projInfoLayout"

import schedulerImageOne from "../../images/scheduler-app/modal/vaccant.png"
import schedulerImageTwo from "../../images/scheduler-app/modal/occupied.png"
import schedulerImageThree from "../../images/scheduler-app/modal/createEvent.png"
import schedulerImageFour from "../../images/scheduler-app/modal/editEvent.png"

const schedulerImages = [
  schedulerImageOne,
  schedulerImageTwo,
  schedulerImageThree,
  schedulerImageFour,
]

class Scheduler extends React.Component {
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
    var description = DATABASE.projects.schedulerApp.description.map(
      (data, index) => {
        return <p key={index}>{data.para}</p>
      }
    )
    var tehnologies = DATABASE.projects.schedulerApp.tehnologies.map(
      (data, index) => {
        return <p key={index}>{data.para}</p>
      }
    )
    return (
      <Layout>
        <h3 className="pages--title">Scheduler</h3>
        <ProjectInfoLayout
          gallerySrc={schedulerImageOne}
          onClick={this.showModal}
          descriptionPara={description}
          techPara={tehnologies}
          pageUrl={DATABASE.projects.schedulerApp.pageUrl}
          gitUrl={DATABASE.projects.schedulerApp.gitUrl}
        />
        <Modal
          id="scheduler-modal"
          modalText="Scheduler"
          show={this.state.visible}
          handleClose={this.showModal}
          imgAlt="image"
          images={schedulerImages}
        />
      </Layout>
    )
  }
}

export default Scheduler
