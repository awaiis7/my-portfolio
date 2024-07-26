import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const posts = [
  {
    id: 1,
    title: 'Web Developer Trainee',
    href: '#',
    description:
      "I completed a year of web development training, starting with HTML, CSS, SASS, and Bootstrap, then advancing to the MERN stack: React, Node js, Express, and MongoDB with Mongoose. By the program's end, I successfully delivered multiple projects.",
    date: 'One Year',
    datetime: '2023-2024',
    category: { title: 'June-2023 to June-2024', href: '#' },
    author: {
      name: 'Software Company',
      role: 'SeeBiz PVT LTD Lahore',
      href: 'https://see.biz/',
      imageUrl: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/seebiz_myuc8v.jpg',
    },
  },
  // Duplicate post removed; add more posts as needed...
];

export default function Experience() {
  return (
    <div className="bg-black text-white py-5" id="experience">
      <Container className="my-5">
        <Row>
          <Col md={12} className="">
            <h2 className="text-3xl font-bold tracking-tight mb-5">PROFESSIONAL EXPERIENCE</h2>
          </Col>
        </Row>
        <Row>
          {posts.map((post) => (
            <Col md={6} key={post.id} className="mb-4">
              <Card className="bg-light shadow-lg rounded-lg p-3 h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted">{post.date}</small>
                    <Button href={post.category.href} variant="dark" size="sm">
                      {post.category.title}
                    </Button>
                  </div>
                  <Card.Title>
                    <a href={post.href} className="text-dark">
                      {post.title}
                    </a>
                  </Card.Title>
                  <Card.Text className="text-muted">{post.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light border-0">
                  <div className="d-flex align-items-center">
                    <img
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      className="rounded-circle"
                      style={{ width: '40px', height: '40px' }}
                    />
                    <div className="ms-3">
                      <Card.Link href={post.author.href} className="text-dark">
                        {post.author.name}
                      </Card.Link>
                      <small className="d-block text-muted">{post.author.role}</small>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
