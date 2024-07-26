import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'React Base simple template',
    imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721755789/Screens_k0vviw.jpg',
    imageAlt: "The site showcases a React app using Bootstrap CSS, hooks ,routes, and props to create a dynamic, responsive layout.",
    price: '$35',
    color: 'Black',
    link: 'https://reacttemplate1.vercel.app/'
  },
  {
    id: 2,
    name: 'CRUD Application with Local Storage',
    imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721743503/Screensho_xzlmkq.jpg',
    imageAlt: "A React-based Todo List application with features for adding, editing, deleting, and bulk deleting tasks, with interactive UI and state management.",
    price: '$35',
    color: 'Black',
    link: 'https://react-to-do-app-yuqi.vercel.app/'
  },
   {
    id: 2,
    name: 'Template by React Tab',
    imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721826894/Screen5_u1ihhb.jpg',
    imageAlt: "The site showcases a React app using Bootstrap CSS for styling, React router dom and React JS for functionality, featuring a seamless tabbed interface that highlights efficient navigation and state management.",
    price: '$35',
    color: 'Black',
    link: 'https://react-tab-three.vercel.app/'
  },
  // More products...
];
function Reactproject() {
  return (
    <div className="bg-dark text-white main_project">
    <Container className="py-5">
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={3}>
            <Card className="bg-black text-white h-100">
              <div className="position-relative overflow-hidden custom-card-img-container">
                <Card.Img variant="top" src={product.imageSrc} alt={product.imageAlt} className="custom-card-img" />
                <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center box_overlay">
                  <Button variant="light" href={product.link} target="_blank">See More</Button>
                </div>
              </div>
              <Card.Body className="bg-secondary d-flex flex-column justify-content-between">
                <Card.Title className="mb-2">
                  <a href={product.link} className="text-white text-decoration-none">{product.name}</a>
                </Card.Title>
                <Card.Text>{product.imageAlt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default Reactproject
