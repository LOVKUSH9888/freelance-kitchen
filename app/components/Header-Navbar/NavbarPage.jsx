"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav, Navbar } from "react-bootstrap";

const NavbarPage = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        collapseOnSelect
        expand="xs"
        bg={collapsed ? "transparent" : "white"}
        variant={collapsed ? "dark" : "light"}
        className={`px-5 navbar-fixed-top ${collapsed ? "collapsed" : ""}`}
        style={{ position: "absolute", width: "100%", zIndex: 1000 }}
      >
        <Navbar.Brand href="/">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto d-flex text-center align-item-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pages/about">About Us</Nav.Link>
            <Nav.Link href="/pages/services">Services</Nav.Link>
            <Nav.Link href="/pages/projects">Projects</Nav.Link>
            <Nav.Link href="/pages/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Banner Image with Background Overlay */}
      <div className="banner-image position-relative" style={{ height: "100vh", zIndex: -1 }}>
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
          <h4 className="text-white">RED commercial kitchens</h4>
          <div className="d-flex flex-row">
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              Design | Sales | Maintenance
            </Link>
            {/* ... other Link components */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
