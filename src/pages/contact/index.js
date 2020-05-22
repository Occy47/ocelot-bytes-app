import React from "react"
import Layout from "../../components/layout"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesList: [],
    }
  }

  // componentDidMount() {
  //   Firebase.images().once("value", snapshot => {
  //     const usersObject = snapshot.val()

  //     const usersList = Object.keys(usersObject).map(key => ({
  //       ...usersObject[key],
  //       uid: key,
  //     }))
  //     this.setState({ imagesList: usersList })
  //   })
  // }

  render() {
    // var images = Firebase.images()
    // console.log(images)
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>
          To contact me please...
        </h3>
        <div
          style={{
            border: "1px solid",
            borderColor: "#eaf900",
            backgroundColor: "#00ff0042",
            maxWidth: 600,
            padding: 5,
          }}
        >
          <p>You can send me message</p>
        </div>
      </Layout>
    )
  }
}

export default Contact
