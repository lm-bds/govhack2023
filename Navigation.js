import React from 'react';
import logo from "../static/donor_predict_logo.png";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            className="logo d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#dropoffs">Dropoff Points</Nav.Link>
          <NavDropdown title="Choose a State" id="basic-nav-dropdown">
            <NavDropdown.Item href="#act">ACT</NavDropdown.Item>
            <NavDropdown.Item href="#nsw">NSW</NavDropdown.Item>
            <NavDropdown.Item href="#nt">NT</NavDropdown.Item>
            <NavDropdown.Item href="#qld">QLD</NavDropdown.Item>
            <NavDropdown.Item href="#sa">SA</NavDropdown.Item>
            <NavDropdown.Item href="#tas">TAS</NavDropdown.Item>
            <NavDropdown.Item href="#vic">VIC</NavDropdown.Item>
            <NavDropdown.Item href="#wa">WA</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#help">Help</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
