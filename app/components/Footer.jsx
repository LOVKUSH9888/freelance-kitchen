import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-success">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            We Design all products and serve all our customers across North
            India and the Middle East. We have a team of engineers and
            professionals who design and define the exact dimensions using the
            latest Computer Aided Design Systems to give you a flawless product.
          </p>
          <div className="icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> Street name and number</span> City, Country
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+00) 0000 000 000</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="#"> office@company.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2>
            {" "}
            Company<span> logo</span>
          </h2>
          <p className="menu">
            <a href="#"> Home</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p className="name"> Company Name &copy; 2016</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
