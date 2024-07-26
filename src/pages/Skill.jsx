import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skill.css'; // Make sure this file contains your custom styles

const skills = [
    {
        name: 'HTML',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965261/html_gs4rlb.png',
    },
    {
        name: 'CSS',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965260/css_p8gvum.png',
    },
    {
        name: 'JavaScript',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965260/js_i5g1h6.png',
    },
    {
        name: 'BootStrap',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788260/bootstrap_n86ye6.png',
    },
    {
        name: 'React JS',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965765/react_fmknln.png',
    },
    {
        name: 'Node Js',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965764/node_xrw70g.png',
    },
    {
        name: 'Express Js',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965765/express_k3mky7.png',
    },
    {
        name: 'Mongo DB',
        imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965764/mongodb_eixbre.png',
    },
];

export default function Skill() {
    return (
        <div className="bg-gray-900 text-white py-24 sm:py-32 sklls" id='skills'>
            <Container>
                <Row className="mb-5 align-items-center">
                    <Col md={4}>
                        <h2 className="text-3xl font-bold tracking-tight">CORE SKILLS</h2>
                        <p className="mt-6 text-lg leading-8">
                            Proficient in HTML, CSS, SASS, Bootstrap, React, Node.js, Express, MongoDB, and Mongoose for web development.
                        </p>
                    </Col>
                    <Col md={8}>
                        <Row>
                            {skills.map((skill) => (
                                <Col xs={6} sm={4} md={3} key={skill.name} className="mb-4">
                                    <Card className="skill-card h-100 d-flex align-items-center justify-content-center">
                                        <Card.Body className="d-flex flex-column align-items-center p-2">
                                            <img className="rounded-circle" src={skill.imageUrl} alt={skill.name} />
                                            <h3 className="text-lg mt-2">{skill.name}</h3>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
