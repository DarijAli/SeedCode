import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Spruce1 from "../assets/images/Spruce1.svg"
import Spruce2 from "../assets/images/Spruce2.svg"
import Spruce3 from "../assets/images/Spruce3.svg"
import Spruce4 from "../assets/images/Spruce4.svg"
import Vector1 from "../assets/images/Vector 1.svg"
import Vector2 from "../assets/images/Vector 2.svg"
import Vector3 from "../assets/images/Vector 4.svg"
import House from "../assets/images/Home.svg"

const Details = () => {
  return (
    <section id="detail-section">
      <Container className="detail-container" fluid>
        <Row className="detail-row">
          <Col className="detail-col d-flex flex-column" sm={4} md={4}>
            <Col className="detail-col">
              <Image src={Spruce4} className="detail-image" />
            </Col>

            <Col className="detail-col">
              <Image src={Spruce2} className="detail-image" />
            </Col>
          </Col>
          <Col
            md={4}
            sm={4}
            className="detail-center-col d-flex justify-content-center align-items-center"
          >
            <Image src={Vector1} className="detail-vector1" />
            <Image src={House} className="detail-image" />
            <Image src={Vector2} className="detail-vector2" />
            <Image src={Vector3} className="detail-vector3" />
          </Col>
          <Col className="detail-col d-flex flex-column" sm={4} md={4}>
            <Col className="detail-col">
              <Image src={Spruce3} className="detail-image" />
            </Col>
            <Col className="detail-col">
              <Image src={Spruce1} className="detail-image" />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Details
