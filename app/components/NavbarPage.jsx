"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Navbar, Nav, Carousel, Container } from "react-bootstrap";
import Image from "next/image";

const NavbarPage = () => {
  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <>
      <Navbar
        bg={isNavbarExpanded ? "black" : "transparent"}
        variant="dark"
        expand="lg"
        Remove
        fixed="top"
      >
        <Navbar.Brand href="#home" className="p-2">
          <Image
            src="/logo.png"
            width={85}
            height={80}
            alt="Picture of the author"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto d-flex justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#about">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .slide-in {
          animation: slideInFromLeft 1s ease-in-out;
        }
      `}</style>

      <Container fluid style={{ padding: 0, margin: 0, maxWidth: "100%" }}>
        <Carousel>
          <Carousel.Item style={{ height: "100vh" }}>
            <Image
              className="d-block w-100 h-100"
              src="/asset5.webp"
              alt="First slide"
              layout="fill"
              objectFit="cover"
            />
            <div className="carousel-caption">
              <h1 className="slide-in">RED commercial kitchens</h1>
              <div className="container d-flex justify-content-center">
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Design |</h2>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Sales |</h2>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Maintenance</h2>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item style={{ height: "100vh" }}>
            <Image
              className="d-block w-100 h-100"
              src="/asset4.png"
              alt="Second slide"
              layout="fill"
              objectFit="cover"
            />
            <div className="carousel-caption">
            <h1 className="slide-in">RED commercial kitchens</h1>
              <div className="container d-flex justify-content-center">
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Design |</h2>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Sales |</h2>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Maintenance</h2>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item style={{ height: "100vh" }}>
            <Image
              className="d-block w-100 h-100"
              src="/asset7.webp"
              alt="Third slide"
              layout="fill"
              objectFit="cover"
            />
            <div className="carousel-caption">
            <h1 className="slide-in">RED commercial kitchens</h1>
              <div className="container d-flex justify-content-center">
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Design |</h2>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Sales |</h2>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h2 className="slide-in">Maintenance</h2>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items with different images as needed */}
        </Carousel>
      </Container>
    </>
  );
};

export default NavbarPage;
