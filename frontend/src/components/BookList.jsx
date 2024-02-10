import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { getFinishedBooks, getUnfinishedBooks } from '../services/BookService';
import Book from './Book';

const BookList = () => {
    const [showFinished, setShowFinished] = useState(false);
  
    const books = showFinished ? getFinishedBooks() : getUnfinishedBooks();
  
    return (
      <Container>
        <Row className="align-items-center">
          <Col xs={2}>
            <h2 className="mt-4 mb-4">My Books:</h2>
          </Col>
          
          <Col xs={3}>
            <Button
              variant="primary"
              onClick={() => setShowFinished(false)}
              className={`${showFinished ? 'btn-light' : 'btn-dark'} m-2`}
            >
              To Read
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowFinished(true)}
              className={`${showFinished ? 'btn-dark' : 'btn-light'} m-2`}
            >
              Finished
            </Button>
          </Col>
        </Row>
          {books.map((book, index) => (
            <Book key={index} title={book.title} author={book.author} note={book.note} />
          ))}
      </Container>
    );
};

export default BookList;
