import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import krugerstar from "../img/krugerstar.png";
import Offcanvas from "react-bootstrap/Offcanvas";


const Navbare = () => {
  let activeClassName = "active";
  return (
   
      <>
        {["sm"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
 
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      

     

      <hr className="divi" />
    </>
  );
};

export default Navbare;
