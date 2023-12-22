import React from "react";
import Image from "next/image";
import "./Footer.css";
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
      <div className="container-fluid p-0">
        <div className="row love-bag text-dark p-5 fw-semibold text-center align-self-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
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
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center align-self-center">
            <div>
              <Image
                src="/logo.png"
                width={90}
                height={90}
                alt="Picture of the author"
              />
            </div>
            <div>
              <button className=" fw-semibold btn btn-light my-button mt-3">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <h4>Address Will be added later</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
