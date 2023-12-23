import React from "react";
import Image from "next/image";
import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const iconSize = 30; // Set the desired size for the icons

  return (
    <>
      <div className="container-fluid p-0 border-top mt-2 border-3 border-dark">
        <div className="row love-bag text-dark p-3 fw-semibold">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 p-3 align-self-center">
            <div>
              <FaEnvelope size={iconSize} />
              <h5> info@mackaydraft.com.au</h5>
            </div>
            <div>
              <FaPhone size={iconSize} />
              <h5>+1 123-456-7890</h5>
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
              <button className="fw-semibold btn btn-outline-dark my-button mt-3 m-3 px-5">
                Contact Us
              </button>
              <br />
              <div className="">
                <p>© All right reserved 2023. Red Engineers.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 p-5  text-center align-self-center">
            <h5>
              Mackay Drafting, Suite 2/52 MacAlister St, Mackay QLD 4740,
              Australia
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
