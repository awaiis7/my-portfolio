
// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import './Project.css'; // Import the CSS file

// function Project() {
//   return (
//     <div className="">
//       <Navbar expand="lg" id="Home" className="navbar-custom  pt-5  pb-5">
//         <Container className=" mt-5 mb-5">
//           <Navbar.Brand>
//             <Nav.Link as={Link} to="/" className="project"  >Projects</Nav.Link>
//           </Navbar.Brand>
//           {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="Project/html">HTML/CSS</Nav.Link>
//               <Nav.Link as={Link} to="Project/javascript">JavaScript</Nav.Link>
//               <Nav.Link as={Link} to="Project/react">React</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Container className="">
//         <Outlet />
//       </Container>
//     </div>
//   );
// }

// export default Project;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Project.css'; // Import the CSS file

function Project() {
  return (
    <div className="">
      
      <Navbar expand="lg" id="project" className="navbar-custom py-5 ">
      
        <Container className="mt-5 mb-5">
          <Navbar.Brand>
            <Nav.Link as={Link} to="/" className="project"><b>PROJECTS</b> </Nav.Link>
          </Navbar.Brand>
          {/* Navbar.Toggle aur Navbar.Collapse ko remove kar diya */}
          <Nav className="me-auto flex-row">
            <Nav.Link as={Link} to="/Project/html" className="mx-2  border-4 border-bottom border-secondary thick-border">HTML/CSS</Nav.Link>
            <Nav.Link as={Link} to="/Project/javascript" className="mx-2 border-4 border-bottom border-secondary thick-border">JavaScript</Nav.Link>
            <Nav.Link as={Link} to="/Project/react" className="mx-2 border-4 border-bottom border-secondary thick-border">React</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="">
        <Outlet />
      </Container>
    </div>
  );
}

export default Project;


