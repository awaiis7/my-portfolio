

import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from "react-router-dom";
import { MdOutlineCoronavirus } from "react-icons/md";
import './Headder.css';

function Headder() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <div>
      <Navbar expanded={expanded} className="navbarchild" variant="white" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <MdOutlineCoronavirus className="rotate-on-hover" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
            className={`navbar-toggler ${expanded ? 'active' : ''}`}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="thick-border"  onClick={handleClose}>Home</Nav.Link>
              <Nav.Link href="#experience" className="thick-border" onClick={handleClose}>Experience</Nav.Link>
              <Nav.Link href="#skills" className="thick-border" onClick={handleClose}>Skills</Nav.Link>
              <Nav.Link href="#project" className="thick-border" onClick={handleClose}>Project</Nav.Link>
              <Nav.Link href="#contact" className="thick-border" onClick={handleClose}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Headder;
