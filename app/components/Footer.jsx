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
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="container-fluid p-0 border border-3">
        <div className="row love-bag text-dark p-5 fw-semibold">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 p-3 border border-dark rounded align-self-center">
            <div>
              <FaEnvelope />
              <h4> example@email.com</h4>
            </div>
            <div>
              <FaPhone />
              <h4>+1 123-456-7890</h4>
            </div>
            <div>
              <FaInstagram /> <FaFacebook />
              <FaTwitter /><FaLinkedinIn/>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center align-self-center">
            <div>
              <Image
                src="/logo.png"
                width={120}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div>
              <button className="fw-semibold btn btn-light my-button mt-3">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 p-5 border border-dark rounded text-center align-self-center">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />

            <p>
              <FaMapMarker /> Mackay Drafting, Suite 2/52 MacAlister St, Mackay
              QLD 4740, Australia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
