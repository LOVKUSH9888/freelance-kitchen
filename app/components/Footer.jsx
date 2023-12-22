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
  const iconSize = 30; // Set the desired size for the icons

  return (
    <>
      <div className="container-fluid p-0 border border-3 border-dark border-bottom-0">
        <div className="row love-bag text-dark p-5 fw-semibold">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 p-3 align-self-center">
            <div>
              <FaEnvelope size={iconSize} />
              <h5> info@mackaydraft.com.au</h5>
            </div>
            <div>
              <FaPhone size={iconSize} />
              <h4>+1 123-456-7890</h4>
            </div>
            <div>
              <FaInstagram size={iconSize} /> <FaFacebook size={iconSize} />
              <FaTwitter size={iconSize} />
              <FaLinkedinIn size={iconSize} />
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
              <button className="fw-semibold btn btn-outline-primary my-button mt-3 m-3">
                Contact Us
              </button>
              <br />
              <div className="">© All right reserved 2023. Red Engineers.</div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 p-5  text-center align-self-center">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" size={iconSize} />

            <p>
              <FaMapMarker size={iconSize} />{" "}
              <h5>
                Mackay Drafting, Suite 2/52 MacAlister St, Mackay QLD 4740,
                Australia{" "}
              </h5>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
