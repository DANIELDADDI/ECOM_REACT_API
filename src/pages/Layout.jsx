import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Layout = () => {
  return (
    // <Navbar
    //   collapseOnSelect
    //   expand="lg"
    //   className=" container bg-body-tertiary justify-content-between"
    // >
    //   <Container>
    //     <Navbar.Brand href="/">Q8STORE</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/product">Product</Nav.Link>
    //         <Nav.Link href="/contact">Contact</Nav.Link>
    //         <Nav.Link href="/about">About</Nav.Link>
    //         <Nav.Link href="/faq">FQA</Nav.Link>

    //         <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="/login">Login</Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           <i className="bi bi-bag bg-warning"></i>Cart
    //           <i class="bi bi-bag-check-fill bg-dark"></i>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav
      class="navbar navbar-expand-md bg-dark sticky-top border-bottom"
      data-bs-theme="dark"
    >
      <div class="container">
        <a class="navbar-brand d-md-none" href="#">
          <svg class="bi" width="24" height="24" aria-hidden="true">
            <use xlink:href="#aperture"></use>
          </svg>
          Q8STORE
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">
              Q8STORE
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-grow-1 justify-content-between">
              <li class="nav-item">
                <a class="nav-link" href="#" aria-label="Aperture">
                  <svg class="bi" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#aperture"></use>
                  </svg>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cart">
                  cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" aria-label="Cart">
                  <svg class="bi" width="24" height="24" aria-hidden="true">
                    <use xlink:href="#cart"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
