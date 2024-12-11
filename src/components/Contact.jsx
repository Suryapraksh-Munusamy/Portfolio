import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import AnimatedButton from './common/AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="section-title text-center mb-5">Get In Touch</h2>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <AnimatedButton 
                type="submit"
                variant="primary"
                effect="pulse"
                className="w-100"
              >
                Send Message
              </AnimatedButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;