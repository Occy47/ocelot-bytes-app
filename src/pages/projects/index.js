import React from "react"
import Layout from "../../components/layout"
import ProjCard from "../../components/projCard"
import ProjCardDisabled from "../../components/projCarDisabled"

import myGuitarimageOne from "../../images/my-guitar/modal/LandingPage.png"
import myGuitarimageTwo from "../../images/my-guitar/modal/HomePage.png"
import myGuitarimageThree from "../../images/my-guitar/modal/CartPage.png"
import myGuitarimageFour from "../../images/my-guitar/modal/AdminPage.png"

import schedulerImageOne from "../../images/scheduler-app/modal/vaccant.png"
import schedulerImageTwo from "../../images/scheduler-app/modal/occupied.png"
import schedulerImageThree from "../../images/scheduler-app/modal/createEvent.png"
import schedulerImageFour from "../../images/scheduler-app/modal/editEvent.png"

import noImage from "../../images/eyes_logo_projCard.png"

const myGuitarImages = [
  myGuitarimageOne,
  myGuitarimageTwo,
  myGuitarimageThree,
  myGuitarimageFour,
]
const schedulerImages = [
  schedulerImageOne,
  schedulerImageTwo,
  schedulerImageThree,
  schedulerImageFour,
]

const noImages = [noImage]

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfCards: 0,
      spaceBetweenCards: 0,
      cardsArray: [],
    }
  }

  componentDidMount() {
    this.calculateNumberofCards()
  }

  calculateNumberofCards() {
    var displayWidth = window.innerWidth - 40
    var cardWidth = 180

    var freeDisplayWidth = displayWidth - 3 * cardWidth
    var cardNumber = freeDisplayWidth / cardWidth
    var cardNumberRounded = Math.floor(cardNumber) - 1
    var spaceBetween =
      (freeDisplayWidth - cardNumberRounded * cardWidth) /
      (cardNumberRounded + 3) /
      2

    var numOfCards = []

    for (var i = 0; i < cardNumberRounded; i++) {
      numOfCards.push(i)
    }
    this.setState({
      numberOfCards: cardNumberRounded,
      spaceBetweenCards: spaceBetween,
      cardsArray: numOfCards,
    })
  }

  render() {
    const { spaceBetweenCards, cardsArray } = this.state

    return (
      <Layout>
        <h3 className="pages--title">My Projects test</h3>
        <div
          className="flexbox-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ margin: spaceBetweenCards }}>
            <ProjCard
              id="my-guitar-card"
              linkId="my-guitar-shopLink"
              title="My guitar shop"
              link="/projects/my-guitar-shop"
              images={myGuitarImages}
              pageUrl="https://my-guitar-shop.web.app/"
              gitUrl="https://github.com/Occy47/my-guitar-shop"
            />
          </div>
          <div style={{ margin: spaceBetweenCards }}>
            <ProjCard
              id="scheduler-app-card"
              linkId="scheduler-appLink"
              title="Scheduler"
              link="/projects/scheduler-app"
              images={schedulerImages}
              pageUrl="..."
              gitUrl="https://github.com/Occy47/Schedule-app"
            />
          </div>
          <div style={{ margin: spaceBetweenCards }}>
            <ProjCard
              id="ocelot-bytes-card"
              linkId="ocelot-bytesLink"
              title="Ocelot bytes"
              link="/projects/ocelot-bytes"
              images={noImages}
              pageUrl="..."
              gitUrl="https://github.com/Occy47/ocelot-bytes-app"
            />
          </div>
          {cardsArray.map(card => (
            <div key={card} style={{ margin: spaceBetweenCards }}>
              <ProjCardDisabled />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Projects
