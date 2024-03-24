
import React from 'react'
import "./About.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand className='logo' href="#"><img src={require("./images/Chevrolet-Logo-3D.jpg")} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto Navlink my-2 my-lg-0"
            style={{ maxHeight: '180px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contect Us</Nav.Link>
            <NavDropdown title="Privcey" id="navbarScrollingDropdown">
              <NavDropdown.Item className='action' href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item className='action' href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='action' href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              About
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


const About = () => {
  return (
    <div className="about">
        {NavScrollExample()}
        <div className='Home'>
          <div>
            <h1>lets started</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, reprehenderit.</p>
            <button>GO</button>
          </div>
          <img src={require("./images/1.jpg")} alt="" />
        </div>
    </div>
  )
}

export default About


