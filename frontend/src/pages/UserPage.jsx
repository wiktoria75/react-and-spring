import Header from "../components/Header";
import { Container, Row, Col } from 'react-bootstrap';
import BookList from "../components/BookList";
import BookForm from "../forms/BookForm";

function UserPage () {
    return (
        <Container fluid className="px-lg-5">
            <Header />
            <Container fluid>
            <Row className="no-gutters">
              <Col lg={8} md={12} className="px-0 mb-4 mb-lg-0 order-2 order-lg-1 mt-2">
                <div style={{ backgroundColor: '#f8f9fa' }}><BookList /></div>
              </Col>
              <Col lg={4} md={12} className="order-1 order-lg-2 px-0 mt-2">
                <div style={{ backgroundColor: '#f8f9fa' }}><BookForm /></div>
              </Col>
            </Row>
          </Container>
        </Container>
    );
};

export default UserPage;
