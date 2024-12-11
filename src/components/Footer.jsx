import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-center text-lg-start mb-4 mb-lg-0">
            <h3 className="h5 mb-3">DevPortfolio</h3>
            <p className="mb-0">Crafting digital experiences with passion</p>
          </Col>
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <div className="social-links-footer justify-content-center">
                <a href="https://github.com/Suryapraksh-Munusamy" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/suryaprakash-munusamy" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
            </div>
          </Col>
          <Col lg={4} className="text-center text-lg-end">
            <p className="mb-0">© {currentYear} All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;