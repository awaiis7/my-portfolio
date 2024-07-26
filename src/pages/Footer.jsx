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
            <NavLink to="" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center">
              <Image
                className="max-h-12 w-full object-contain transition-transform duration-300 hover:scale-110"
                src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715952804/instagram_dv0kwt.png"
                alt="Instagram"
                width={158}
                height={48}
              />
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="https://www.linkedin.com/in/muhammad-sohaib-273b5924a/" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center">
              <Image
                className="max-h-12 w-full object-contain transition-transform duration-300 hover:scale-110"
                src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715952804/LinkdIn_vsadd6.png"
                alt="LinkedIn"
                width={158}
                height={48}
              />
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="https://github.com/sohaibshareefcode" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center">
              <Image
                className="max-h-12 w-full object-contain transition-transform duration-300 hover:scale-110"
                src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715952804/github_xh1tkp.png"
                alt="GitHub"
                width={158}
                height={48}
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
                <p className="mb-0">Ali Town, Lahore</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715955099/phone_kd6hl9.png"
                  className="mr-2"
                  alt=""
                  width={28}
                  height={28}
                />
                <p className="mb-0">+92 301 1589269</p>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1715955099/email_oby0db.png"
                  className="mr-2"
                  alt=""
                  width={32}
                  height={28}
                />
                <p className="mb-0">msohaib11214@gmail.com</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
