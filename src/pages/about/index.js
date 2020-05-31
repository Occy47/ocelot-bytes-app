import React from "react"
import Layout from "../../components/layout"

class About extends React.Component {
  render() {
    return (
      <Layout>
        <h3 style={{ fontFamily: "Orbitron", padding: 20 }}>About me...</h3>
        <div style={{ height: 120, width: 100, border: "1px solid yellow" }}>
          <img src="..." alt="me" />
        </div>

        <br />
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
          <p>
            My name is Ivor Cizmok, I'm 33 and my current location is Osijek,
            Croatia.
          </p>
          <p>
            For the past 12 years I was working and studying to be a Civil
            engineer, then about 3 years ago i decided to change my career and
            began coding.
          </p>
          <p>
            Programmig languages that I learn is HTML, CSS and Javascript with
            focus on React.js. I am familiar with Redux and I used it in couple
            of my practice projects, while Typescript is still quite new to me,
            and I'm still learning. Also I was using Google's Firebase in some
            of my projects for backend. I know basics of GitExtensions and I use
            it to control my GIT account.
          </p>
          <p>
            For now my goal is to gather as much practice and expirience in
            frontend developing and perfect my skills in React.
          </p>
          <p>
            In the future my plans are to learn React Native, and probably C#.
          </p>
        </div>
      </Layout>
    )
  }
}

export default About
