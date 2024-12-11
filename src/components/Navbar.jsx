import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`${scrolled ? 'shadow-sm' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">DevPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500}>Skills</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;