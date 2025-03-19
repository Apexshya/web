import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand="md">
      <Container className='py-3'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#download">Download</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
