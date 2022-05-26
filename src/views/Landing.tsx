import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface LandingProps {}

export const Landing = ({}: LandingProps) => {
  return (
    <Container className="d-flex justify-content-between align-items-center p-5">
      <Container className="bg-white rounded">
        <h1 className="display-2">The best recipes in the solar system.</h1>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <h1>🌚🍲</h1>
        <Link to="login" className="btn btn-primary">
          Get started
        </Link>
      </Container>
    </Container>
  );
};
