"use client";
import Link from "next/link";
import React from "react";
import { Navbar, Nav, Carousel, Container } from 'react-bootstrap';
import Image from 'next/image';

const NavbarPage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home" className="p-2">RED commercial kitchens</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto d-flex justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#about">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid style={{ padding: 0, margin: 0, maxWidth: '100%' }}>
        <Carousel>
          <Carousel.Item style={{ height: '100vh' }}>
            <Image
              className="d-block w-100 h-100"
              src="/asset5.webp"
              alt="First slide"
              layout="fill"
              objectFit="cover"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100vh' }}>
            <Image
              className="d-block w-100 h-100"
              src="/asset4.png"
              alt="Second slide"
              layout="fill"
              objectFit="cover"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100vh' }}>
            <Image
              className="d-block w-100 h-100"
              src="/asset7.webp"
              alt="Third slide"
              layout="fill"
              objectFit="cover"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items with different images as needed */}
        </Carousel>
      </Container>
    </>
  );
};

export default NavbarPage;
