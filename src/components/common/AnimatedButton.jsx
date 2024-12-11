import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  className = '', 
  effect = 'ripple',
  ...props 
}) => {
  const baseClassName = `animated-btn animated-btn--${effect} ${className}`;
  
  if (to) {
    return (
      <Button
        as={Link}
        to={to}
        smooth={true}
        duration={500}
        variant={variant}
        className={baseClassName}
        {...props}
      >
        <span className="animated-btn__content">{children}</span>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      className={baseClassName}
      href={href}
      {...props}
    >
      <span className="animated-btn__content">{children}</span>
    </Button>
  );
};

export default AnimatedButton;