import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Book = ({ title, author, note }) => (
  <Row className="mb-3">
    <Col>
      <div className="border p-3">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Note: {note}</p>
      </div>
    </Col>
  </Row>
);

export default Book;