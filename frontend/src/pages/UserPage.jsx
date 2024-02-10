import Header from "../components/Header";
import { Container, Row, Col } from 'react-bootstrap';
import BookList from "../components/BookList";

const UserPage = () => {
    return (
        <Container fluid className="px-lg-5">
            <Header />
            <Container fluid>
            <Row className="no-gutters">
              <Col lg={8} md={12} className="px-0 mb-4 mb-lg-0 order-2 order-lg-1">
                <BookList />
                <div style={{ backgroundColor: '#f8f9fa', height: '300px' }}>List Component</div>
              </Col>
              <Col lg={4} md={12} className="order-1 order-lg-2">
                {/* Form Component */}
                <div style={{ backgroundColor: '#f8f9fa', height: '300px' }}>Form Component</div>
              </Col>
            </Row>
          </Container>
        </Container>
    );
};

export default UserPage;
