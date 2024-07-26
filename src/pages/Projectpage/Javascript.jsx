import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [

  {
    id: 2,
    name: 'CRUD Application with Local Storage',
    imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721735294/Screenshot_12_ffjgmf.jpg',
    imageAlt: "Designed the user interface using HTML and styled it with CSS and Bootstrap. Implemented CRUD functionality using JavaScript to enable users to create,read, update, and delete data entries.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/crud_system-local-storage/'
  },
  // More products...
];
function Javascript() {
  return (
    <div className="bg-dark text-white main_project" id='javascript'>
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

export default Javascript
