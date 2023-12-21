// Import necessary modules and styles
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// NavbarPage component
const NavbarPage = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        fixed="top"
        expand="lg"
        variant="dark"
        className={`p-md-3 ${
          scrolling || !isNavbarCollapsed ? "bg-light shadow" : ""
        }`}
        onToggle={handleNavbarToggle}
      >
        <Container>
          <Navbar.Brand href="#"><Image
            src="/logo.png"
            alt="Picture of the author"
            width={80}
            height={50}
            style={{ filter: "brightness(100%)" }} // Adjust the brightness value as needed
          /></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarNav">
            <div className="mx-auto"></div>
            <Nav>
              <Nav.Link
                className={scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"}
                href="#"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"}
                href="#"
              >
                About
              </Nav.Link>
              <Nav.Link
                className={scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"}
                href="#"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className={scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"}
                href="#"
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                className={scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"}
                href="#"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner Image */}
      <div className="banner-image relative" style={{ height: "100vh" }}>
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/hdimg.jpg"
            alt="Picture of the author"
            layout="fill" // Use fill layout to cover the container
            objectFit="cover" // Ensure the image covers the container
            style={{ filter: "brightness(25%)" }} // Adjust the brightness value as needed
          />
        </div>
        <div className="relative z-10 text-center">
          {/* Your content goes here */}
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
