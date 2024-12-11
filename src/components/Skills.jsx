import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  const skills = {
    frontend: ['React', 'JavaScript',  'HTML5', 'CSS3'],
    frameworks: ['Bootstrap'],
    backend: ['Node.js', 'Java', 'MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub']
  };

  return (
    <section id="skills" className="section bg-light">
      <Container>
        <h2 className="section-title text-center mb-5">Skills & Technologies</h2>
        <Row>
          {Object.entries(skills).map(([category, items]) => (
            <Col md={6} lg={3} key={category} className="mb-4">
              <h3 className="h5 mb-3 text-capitalize">{category}</h3>
              <div className="skills-container">
                {items.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;