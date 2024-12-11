import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css'
const Layouts = () => {
  return (
    <div>
      <Navbar  expand="lg" id='nav'>
        <Container>
          <Navbar.Brand href="/">  BLOSSOMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"> <i class="fa-solid fa-house" id="home1"></i> Home</Nav.Link>
              <Nav.Link as={Link} to="/Collection"> <i class="fa-solid fa-list"></i> Collection</Nav.Link>
              <Nav.Link as={Link} to="/Shop"><i class="fa-solid fa-bag-shopping"></i> Shop</Nav.Link>
              <Nav.Link as={Link} to="/Offer"><i class="fa-solid fa-tags"></i> Offer</Nav.Link>
              <Nav.Link as={Link} to="/Blogs"><i class="fa-brands fa-microblog"></i> Blog</Nav.Link>
              <Nav.Link as={Link} to="/Feedback"> <i class="fa-solid fa-comment"></i> Feedback</Nav.Link>
            </Nav>
            <Nav className="me-autos">
            <i class="fa-solid fa-user"></i>   <i class="fa-solid fa-heart"></i>   <i class="fa-solid fa-cart-shopping"></i>
            </Nav>          
            </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Outlet />
    </div>
  );
}

export default Layouts;