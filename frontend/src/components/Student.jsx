import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Student = ({ name, email, booksCount }) => (
  <Row className="mb-3 border">
    <Col xs={8} className="p-0">
      <div className="p-3">
        <h3>{name}</h3>
        <p>Email: {email}</p>
      </div>
    </Col>
    <Col xs={4} className="p-0 text-center">
      <div className="p-3">
        <h2>{booksCount}</h2>
        <p>finished books</p>
      </div>
    </Col>
  </Row>
);

export default Student;
