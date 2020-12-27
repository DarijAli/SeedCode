import React from "react"
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap"
import Header from "../components/Header"
import Shield from "../assets/images/Shield.svg"
import Details from "../components/Details"

const Hero = () => {
  return (
    <section id="hero-section">
      <Container fluid className="hero-container">
        <Jumbotron fluid className="jumbo">
          <Row className="hero-header">
            <Col>
              <Header />
            </Col>
          </Row>
          <Row className="d-flex flex-column align-items-center hero-content justify-content-md-center ml-0 mr-0">
            <Col xs="auto" md="auto" lg="auto" xl="auto">
              <h1 className="hero-heading">We are revolutionizing</h1>
            </Col>
            <Col xs="auto" md="auto" lg="auto" xl="auto">
              <h1 className="hero-heading">Local business</h1>
            </Col>
            <Col xs="auto" md="auto" lg="auto" xl="auto">
              <p className="hero-para">
                Spruce Box is an Oregon-based B-Corp dedicated to getting you
                the goods and services you need while always delivering with
                excellence, efficiency, and sustainability.
              </p>
            </Col>
            <Col xs="auto" md="auto" lg="auto" xl="auto">
              <Button className="hero-button">Learn More About Us</Button>
            </Col>
            <Col
              xs="auto"
              md="auto"
              lg="auto"
              xl="auto"
              className="hero-warning d-flex flex-column align-items-center justify-content-center"
            >
              <h2 className="hero-warning-heading">
                <div className="hero-warning-image">
                  <Image src={Shield} alt="" />
                </div>
                Coronavirus (COVID-19) resources and updates
              </h2>
              <p className="hero-warning-para">
                The safety and well-being of everyone who uses Spruce Box Now is
                always our priority.
              </p>
              <p className="hero-warning-para">
                We are actively monitoring the coronavirus (COVID-19) situation.
                Click here for more information.
              </p>
            </Col>
          </Row>
        </Jumbotron>

        <Details />
      </Container>{" "}
    </section>
  )
}

export default Hero
