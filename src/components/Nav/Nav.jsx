import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { assets } from '../../assets/assets';
import "./Nav.css"
function ColorSchemesExample() {
    return (
      <>
        
        <br />
        <Navbar style={{width:"100%",height: '60px', top: '40px', left: '229px' }}  data-bs-theme="light" expand="lg" fixed='top' >
          <Container fluid>
            <Navbar.Brand href="#home"> <img src={assets.logo}></img></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"  className="custom-home-link" >Home</Nav.Link>
              <Nav.Link href="#about us" className="custom-nav-link">About Us</Nav.Link>
              <Nav.Link href="#pricing" className="custom-nav-link">Pricing</Nav.Link>
              <Nav.Link href="#features" className="custom-nav-link">Feature</Nav.Link>
              </Nav>
    <Nav>
    <Button href="#download" className="custom-download-button">Download</Button>
    </Nav>
    
          </Container>
          
        </Navbar>

      </>
    );
  }
  
  export default ColorSchemesExample;