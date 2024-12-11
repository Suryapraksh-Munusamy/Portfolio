import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedButton from './common/AnimatedButton';
import MyPic from "../assets/MyPicture.png"

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={5} className="order-2 order-lg-1">
            <div className="hero-content">
              <h2 className="h5 text-secondary mb-3">👋 Hello, I'm</h2>
              <h1 className="display-4 fw-bold mb-3">Suryaprakash</h1>
              <p className="h3 text-muted mb-4">
                React Js Developer
              </p>
              <p className="lead mb-4">
                I craft beautiful and scalable web applications with modern technologies
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-4">
                <AnimatedButton 
                  to="projects" 
                  variant="primary"
                  effect="glow"
                  className="px-4 py-2"
                >
                  View Projects
                </AnimatedButton>
                <AnimatedButton 
                  to="contact" 
                  variant="outline-primary"
                  effect="slide"
                  className="px-4 py-2"
                >
                  Contact Me
                </AnimatedButton>
              </div>
              <div className="social-links">
                <a href="https://github.com/Suryapraksh-Munusamy" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/suryaprakash-munusamy" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7} className="order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="profile-container">
              <div className="profile-background"></div>
                <img 
                  src={MyPic}
                  alt="Suryaprakash-Munusamy" 
                  className="profile-picture mx-auto d-block" 
                />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;