import React from "react";
import Image from 'next/image';
import "./Footer.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaMapMarker,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="love-bag text-white p-5">
        <Container>
          <Row>
            <Col xs={4}>
              <div>
                <FaEnvelope /> example@email.com
              </div>
              <div>
                <FaPhone /> +1 123-456-7890
              </div>
              <div>
                <FaInstagram /> Instagram
              </div>
              <div>
                <FaFacebook /> Facebook
              </div>
              <div>
                <FaTwitter /> Twitter
              </div>
            </Col>
            <Col xs={4} className="text-center align-self-center">
              <div>
                <Image
                  src="/logo.png"
                  width={90}
                  height={90}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <button className="btn btn-light my-button mt-3">Contact Us</button>
              </div>
            </Col>
            <Col xs={4}>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <h4>Address Will be added later</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
