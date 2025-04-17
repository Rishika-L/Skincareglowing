import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

const Layouts = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]); // State to track cart items
  const [showCart, setShowCart] = useState(false); // State to control cart modal visibility

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleCartShow = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  // Function to add items to the cart
  const updateCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <Navbar expand="lg" id="nav">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <span className="skincare-icon-container me-2">
              <i className="fa-solid fa-leaf skincare-icon"></i>
            </span>
            <span className="brand-name">BLOSSOMS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <i className="fa-solid fa-house me-2"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Collection">
                <i className="fa-solid fa-list me-2"></i> Collection
              </Nav.Link>
              <Nav.Link as={Link} to="/Shop">
                <i className="fa-solid fa-bag-shopping me-2"></i> Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/Offer">
                <i className="fa-solid fa-tags me-2"></i> Offer
              </Nav.Link>
              <Nav.Link as={Link} to="/Blogs">
                <i className="fa-brands fa-microblog me-2"></i> Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/Feedback">
                <i className="fa-solid fa-comment me-2"></i> Feedback
              </Nav.Link>
            </Nav>
            <Nav className="me-autos">
              <i className="fa-solid fa-user mx-2" onClick={handleLoginShow}></i>
              <i className="fa-solid fa-heart mx-2"></i>
              <div className="cart-icon-container mx-2" onClick={handleCartShow}>
                <i className="fa-solid fa-cart-shopping"></i>
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleCartClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item d-flex align-items-center mb-3">
                  <img src={item.imageUrl} alt={item.title} className="cart-item-img me-3" />
                  <div className="flex-grow-1">
                    <h5>{item.title}</h5>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              ))}
              <div className="cart-total mt-3">
                <h5>Total: ${calculateTotal()}</h5>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCartClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleLoginClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Outlet context={{ updateCart }} />
    </div>
  );
};

export default Layouts;
