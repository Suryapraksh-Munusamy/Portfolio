import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AnimatedButton from './common/AnimatedButton';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform(Walmart-clone)',
      description: 'A full-stack e-commerce solution built with React and Node.js',
      image: '/Project1.png',
      technologies: ['React', 'Bootstrap', 'Javascript', 'MySQL'],
      link: 'https://grand-sunshine-594ffa.netlify.app/'
    },
    {
      title: 'Huddle Landing Page',
      description: 'A simple Landing Page with Responsive Using Frontend Technologies',
      image: '/project2.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Suryapraksh-Munusamy/huddle-landing-page-with-alternating-feature-blocks-master'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Bootstrap',
      image: '/project3.png',
      technologies: ['React', 'Bootstrap', 'SCSS'],
      link: 'https://celebrated-griffin-2ddf7e.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="section">
      <Container>
        <h2 className="section-title text-center mb-5">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="project-card h-100">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="technologies mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="skill-badge me-2">{tech}</span>
                    ))}
                  </div>
                  <AnimatedButton 
                    href={project.link}
                    variant="outline-primary"
                    effect="ripple"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </AnimatedButton>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
