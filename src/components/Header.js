import React from "react"
import { Nav, Navbar, Button, Container, Image } from "react-bootstrap"
import Logo from "../assets/images/Logo.svg"

const Header = () => {
  return (
    <section id="header-section">
      <Container fluid>
        <Navbar className="nav" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand className="logo" href="#home">
            <Image className="logo-image" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="navbar-collapse"
            id="responsive-navbar-nav"
          >
            <Nav className="ml-auto mr-auto">
              <Nav.Link className="nav-link" href="#">
                Delivery
              </Nav.Link>
              <Nav.Link className="nav-link" href="#shopping">
                Shopping
              </Nav.Link>
              <Nav.Link className="nav-link" href="#pricing">
                Home Improvement{" "}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#pricing">
                Small Business Software{" "}
              </Nav.Link>
              <Nav.Link className="nav-link" href="#pricing">
                Re-Spruce
              </Nav.Link>
            </Nav>
            <Nav className="nav-button-container">
              <Button className="nav-button">Contact Us</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  )
}

export default Header
