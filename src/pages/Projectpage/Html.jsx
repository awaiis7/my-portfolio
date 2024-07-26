// import React from 'react'

// import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// const products = [
//   {
//     id: 1,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/seebiz-project_x8uo0e.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/final-projectHc/'
//   },
//   {
//     id: 2,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793276/08_qwcjxv.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/project-2/'
//   },
//   {
//     id: 3,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793196/09_ittfej.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/project-1/'
//   },
//   {
//     id: 4,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793101/10_j2trl0.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/project-6/'
//   },
//   {
//     id: 5,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721671285/Screenshot_2024-07-22_22583687_n3orao.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/htmlproject9/'
//   },
//   {
//     id: 6,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721672832/Screenshot_2024-07-22_23263956_eqo9tr.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/html-project10/'
//   },
//   {
//     id: 7,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793620/06_uzew9w.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/project-4/'
//   },
//   {
//     id: 8,
//     name: 'Website Template Layout Design',
//     imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793690/05_cdqo1o.jpg',
//     imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
//     price: '$35',
//     color: 'Black',
//     link: 'https://sohaibshareefcode.github.io/project-5/'
//   },
//   // More products...
// ];
// function Html() {
//   return (
//     <div>
//        <div className="bg-dark text-white main_project">
//       <Container className="py-5">
//         <Row className="g-4">
//           {products.map((product) => (
//             <Col key={product.id} sm={12} md={6} lg={3}>
//               <Card className="bg-black text-white h-100">
//                 <div className="position-relative overflow-hidden">
//                   <Card.Img variant="top" src={product.imageSrc} alt={product.imageAlt} className="custom-card-img" />
//                   <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center box_overlay">
//                     <Button variant="light" href={product.link} target="_blank">See More</Button>
//                   </div>
//                 </div>
//                 <Card.Body className="bg-secondary d-flex flex-column justify-content-between">
//                   <Card.Title className="mb-2">
//                     <a href={product.link} className="text-white text-decoration-none">{product.name}</a>
//                   </Card.Title>
//                   <Card.Text>{product.imageAlt}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//     </div>
//   )
// }

// export default Html








import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Html.css'; // Make sure to import the CSS file

const products = [
  {
    id: 1,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/seebiz-project_x8uo0e.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/final-projectHc/'
  },
  {
    id: 2,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793276/08_qwcjxv.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/project-2/'
  },
  {
    id: 3,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793196/09_ittfej.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/project-1/'
  },
  {
    id: 4,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793101/10_j2trl0.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/project-6/'
  },
  {
    id: 5,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721671285/Screenshot_2024-07-22_22583687_n3orao.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/htmlproject9/'
  },
  {
    id: 6,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dh3rxo5xv/image/upload/v1721672832/Screenshot_2024-07-22_23263956_eqo9tr.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/html-project10/'
  },
  {
    id: 7,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793620/06_uzew9w.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/project-4/'
  },
  {
    id: 8,
    name: 'Website Template Layout Design',
    imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793690/05_cdqo1o.jpg',
    imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: '$35',
    color: 'Black',
    link: 'https://sohaibshareefcode.github.io/project-5/'
  },
  // More products...
];

function Html() {
  return (
    <div className="bg-dark text-white main_project" id='html'>
      <Container className="py-5">
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={3}>
              <Card className="bg-black text-white h-100">
                <div className="position-relative overflow-hidden custom-card-img-container">
                  <Card.Img variant="top" src={product.imageSrc} alt={product.imageAlt} className="custom-card-img" />
                  <div className="position-absolute top-0 start-0 end-0 box_overlay d-flex align-items-center justify-content-center">
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
  );
}

export default Html;

