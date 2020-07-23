import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Katie Lin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-tech">All About Tech</Nav.Link>
          <Nav.Link href="#extracurriculars">Extracurriculars</Nav.Link>
          <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          {/* <NavDropdown title="Experiences" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Technical Experiences</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Extracurricular Involvement</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Hobbies</NavDropdown.Item> */}
          {/* </NavDropdown>
          <Nav.Link href="#vision">Vision</Nav.Link> */}
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
