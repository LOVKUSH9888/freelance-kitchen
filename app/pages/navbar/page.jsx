"use client";
import Link from "next/link";
import React from "react";
import { Navbar, Nav, Carousel, Container } from 'react-bootstrap';

const navbarPage = () => {
  return (
    <>
      <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Carousel>
          <Carousel.Item style={{ height: '100vh' }}>
            <img
              className="d-block w-100 h-100"
              src="https://via.placeholder.com/1920x600"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100vh' }}>
            <img
              className="d-block w-100 h-100"
              src="https://via.placeholder.com/1920x600"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100vh' }}>
            <img
              className="d-block w-100 h-100"
              src="https://via.placeholder.com/1920x600"
              alt="Third slide"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items with different images as needed */}
        </Carousel>
      </Container>
    </div>
    </>
  );
};

export default navbarPage;
