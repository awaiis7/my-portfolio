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
            <h2 className="name">Awais Ahmed</h2>
            <Button
              variant="dark"
              className="mt-3 p-2"
              href="https://drive.google.com/file/d/10mSYdJUXlyQe_9Z6LXOtmIA33y5a7dHE/view?usp=drivesdk"
            >
              Download Resume
            </Button>
          </Col>
          <Col xs={12} lg={6} className="mainspiring">
            <p className="aspiring">
            Aspiring web developer, studying business and information technology(BBIT) from UET,Lahore. I have
               Skilled in HTML, CSS, JavaScript, and keen on learning
              React to enhance my skilled in <b>MERN</b> stack development. I also made and deploy a website using backend technolgies like node.js,exprss.js and mongodb database.
               Knows Git and GitHub for managing
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


