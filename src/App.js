import React from 'react';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <Container className="p-3">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">react-auth0-login</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Jumbotron>
      <p>Simple react app to login to auth0.</p>
      <LoginButton/>
      <LogoutButton/>
    </Jumbotron>
  </Container>
  );
}

export default App;
