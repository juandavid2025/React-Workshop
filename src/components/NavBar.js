import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Super App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/usuarios">Usuarios</Link>
            <Link className="nav-link" to="/sedes">Sedes</Link>
            <Link className="nav-link" to="/buscador">Buscador</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}