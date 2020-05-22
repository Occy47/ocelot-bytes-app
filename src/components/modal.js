import React from "react"
import "./modal.css"

class Modal extends React.Component {
  render() {
    const showModal = this.props.show ? "display-block" : "display-none"
    return (
      <div id={this.props.id} className={`modal ${showModal}`}>
        <div className="modal-content">
          <span className="close" onClick={this.props.handleClose}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
          <div
            className="flex-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 500,
            }}
          >
            <button className="modal--button">&laquo;</button>
            <img src={this.props.imgSrc} alt={this.props.imgAlt} />
            <button className="modal--button">&raquo;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
