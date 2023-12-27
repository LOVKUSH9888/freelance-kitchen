"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const [collapsed, setCollapsed] = useState(true);

  //Params-Logic
  const pathname = usePathname();
  const pathSegments = pathname.split("/"); // Split the pathname into segments
  const lastParam = pathSegments[pathSegments.length - 1]; // Get the last segment

  const capitalizedLastParam = lastParam.charAt(0).toUpperCase() + lastParam.slice(1);

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
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto d-flex text-center align-item-center">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Who we are" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="/pages/whoweare/about"
                className="text-center"
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/whoweare/ourprocess"
                className="text-center"
              >
                Our Process
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/pages/services" className="text-center">
                Services
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/pages/services/howtodesign"
                className="text-center"
              >
                How to Design
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pages/projects">Projects</Nav.Link>
            <Nav.Link href="/pages/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Banner Image with Background Overlay */}
      <div
        className="banner-image position-relative"
        style={{ height: "60vh", zIndex: -1 }}
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
          <h1 className="text-white">
            <b>{capitalizedLastParam} Us</b>
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
