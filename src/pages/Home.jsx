import React from "react";
import Type from "./Type";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Home.css";
import Experience from "./Experience";
import Skill from "./Skill";
import Footer from "./Footer";
import Project from "./Project";
import WhatsAppButton from "./WhatsAppButton";
function Home() {
  return (
    <div>
      <Container fluid className="maincontiner accordion  p-5 text-white mt-5" id="home" >
        <Row className="main">
          <Col xs={12} lg={6} className="mb-3 mb-lg-0">
            <Type />
            <h2 className="name">Muhammad Sohaib</h2>
            <Button
              variant="dark"
              className="mt-3 p-2"
              href="https://drive.google.com/file/d/17HRgo53-wI53e6puLz22DVWmMvRyl3G-/view?usp=drive_link"
            >
              Download Resume
            </Button>
          </Col>
          <Col xs={12} lg={6} className="mainspiring">
            <p className="aspiring">
              Aspiring web developer, studying Computer Science, eager for an
              internship. Skilled in HTML, CSS, JavaScript, and keen on learning
              React for better websites. Interested in backend tools like
              Node.js, Express, and databases. Knows Git and GitHub for managing
              code. Enthusiastic about full stack development and always ready
              to learn. Good communicator, passionate about creating awesome web
              projects.
            </p>
          </Col>
        </Row>
      </Container>
      <Experience />
      <Skill /> 
  <Project/>
  <WhatsAppButton/>
       <Footer />
    </div>
  );
}

export default Home;


