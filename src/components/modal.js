import React from "react"
import "./modal.css"

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgIndex: 0,
      imageGallery: ["0", "1", "2"],
    }
    this.shuffleLeft = this.shuffleLeft.bind(this)
    this.shuffleRight = this.shuffleRight.bind(this)
  }

  componentDidMount() {
    var images = this.props.images
    this.setState({ imageGallery: images })
    console.log(this.state.imageGallery)
  }

  shuffleLeft() {
    const { imgIndex, imageGallery } = this.state
    var index = imgIndex
    var galleryLength = imageGallery.length
    galleryLength--
    if (imgIndex <= 0) {
      this.setState({ imgIndex: galleryLength })
    } else {
      index--
      this.setState({ imgIndex: index })
    }
    console.log(imageGallery)
  }

  shuffleRight() {
    const { imgIndex, imageGallery } = this.state
    var index = imgIndex
    var galleryLength = imageGallery.length
    galleryLength--
    if (imgIndex >= galleryLength) {
      this.setState({ imgIndex: 0 })
    } else {
      index++
      this.setState({ imgIndex: index })
    }
    console.log(imageGallery)
  }

  render() {
    const { imageGallery, imgIndex } = this.state
    const showModal = this.props.show ? "display-block" : "display-none"
    return (
      <div id={this.props.id} className={`modal ${showModal}`}>
        <div className="modal-content">
          <span className="close" onClick={this.props.handleClose}>
            &times;
          </span>
          <p style={{ fontFamily: "Orbitron" }}>{this.props.modalText}</p>
          <div
            className="flex-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 500,
            }}
          >
            <button className="modal--button" onClick={this.shuffleLeft}>
              &laquo;
            </button>
            <div
              style={{
                height: "450px",
                width: "780px",
                border: "1px solid yellow",
              }}
            >
              <img
                src={imageGallery[imgIndex]}
                alt={this.props.imgAlt}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <button className="modal--button" onClick={this.shuffleRight}>
              &raquo;
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
