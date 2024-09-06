import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Footer.css';
export default function Footer() {
  return (
    <div className=" footerb pt-4 sm:py-12 text-white footer pb-5" id='contact'  >
      <Container className=''>
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Connect with Me Online
        </h2>
        <Row className="mt-4 justify-content-center">
          <Col xs="auto">
            <NavLink  to="https://mail.google.com/mail/?view=cm&fs=1&to=awaisahmed4528011@gmail.com&su=Portfolio%20Inquiry&body=Hello,%20I%20am%20interested%20in%20your%20portfolio." 
   target="_blank" 
   rel="noopener noreferrer" 
   className="d-flex justify-content-center align-items-center">
           
              <Image
              
                className="max-h-12 w-full object-contain transition-transform duration-300 hover:scale-110 gmail"
                src="https://res.cloudinary.com/dbe9eo4bd/image/upload/v1725140882/rubaitul-azad-W3Z2ZNs1y4I-unsplash_yldavo.jpg"
                alt="Gmail"
                width={158}
                height={68}
              />
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="https://www.linkedin.com/in/awais-ahmed- 086040264" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center">
              <Image
                className="max-h-12 w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125 hover:rotate-6 hover:shadow-lg linkedin"
                src="https://res.cloudinary.com/dbe9eo4bd/image/upload/v1725141886/alexander-shatov-9Zjd7PE_FRM-unsplash_vtol8o.jpg"
                alt="LinkedIn"
                width={158}
                height={68}
              />
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="https://github.com/awaiis7" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center">
              <Image
                className="max-h-12 w-full object-contain transition-transform duration-300 hover:scale-110 github"
                src="https://res.cloudinary.com/dbe9eo4bd/image/upload/v1725141912/rubaitul-azad-HLQDfaJUTVI-unsplash_qui0hv.jpg"
                alt="GitHub"
                width={158}
                height={68}
              />
              
            </NavLink>
          </Col>
        </Row>
        <Card className="mt-4 bg-black text-white shadow-md rounded-lg mx-auto boxcard" style={{ maxWidth: '500px' }}>
          <Card.Body>
            <Card.Title className="text-2xl font-semibold mb-4">Contact Information</Card.Title>
            <div className="space-y-2">
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715955099/address_xbe64p.png"
                  className="mr-2"
                  alt=""
                  width={28}
                  height={28}
                />
                <p className="mb-0">Saddar Cantt, Lahore</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715955099/phone_kd6hl9.png"
                  className="mr-2"
                  alt=""
                  width={28}
                  height={28}
                />
                <p className="mb-0">+92 331 1323017</p>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715955099/email_oby0db.png"
                  className="mr-2"
                  alt=""
                  width={32}
                  height={28}
                />
                <p className="mb-0">awaisahmed4528011@gmail.com</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}