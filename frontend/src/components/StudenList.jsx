import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StudentService from '../services/StudentService';
import Student from './Student';
import { useUser } from '../services/AuthService';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const { user, token } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsData = await StudentService.getAllStudents(token);
                setStudents(studentsData);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={4}>
                    <h2 className="mt-4 mb-4">Student List:</h2>
                </Col>
            </Row>
            {students.map((student, index) => (
                <Student key={index} name={student.name} email={student.email} booksCount={student.bookCount} />
            ))}
        </Container>
    );
};

export default StudentList;
