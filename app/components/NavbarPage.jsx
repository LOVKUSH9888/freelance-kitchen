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
      setScrolling(window.pageYOffset > 100);
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
          <Navbar.Brand href="#">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={80}
              height={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarNav">
            <div className="mx-auto"></div>
            <Nav>
              <Nav.Link
                className={
                  scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"
                }
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={
                  scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"
                }
                href="/pages/about"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className={
                  scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"
                }
                href="/pages/services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className={
                  scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"
                }
                href="/pages/projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className={
                  scrolling || !isNavbarCollapsed ? "text-dark" : "text-white"
                }
                href="/pages/contact"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner Image with Background Overlay */}
      <div
        className="banner-image position-relative"
        style={{ height: "100vh", zIndex: -1 }}
      >
        <Image
          src="/hdimg.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(50%)" }}
        />
        <div
          className="overlay position-absolute w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="d-flex flex-column align-items-center justify-content-center text-center position-absolute w-100 h-100">
          <h1 className="text-white">RED commercial kitchens</h1>
          <div className="d-flex flex-row">
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              <h2>Design |</h2>
            </Link>
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              <h2>Sales |</h2>
            </Link>
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              <h2>Maintenance </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;