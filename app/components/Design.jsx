import React from "react";
import Image from "next/image";
// import { Container, Row, Col } from 'react-bootstrap';

const Design = () => {
  return (
    <>
      <div className="bg-dark text-white p-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h2>Design</h2>
            </div>
            <div className="col-8">
              <p>
                We understand the importance of design in a uniquely challenging
                industry and our progressive work and ideals are evident in our
                multi-award-winning projects. Using the latest CAD software, we
                offer in-house 3D renders and modelling to enable the full
                details of the project to be realised with our customers at all
                stages of the design.
              </p>

              <p>
                We know how crucial the ergonomics of your kitchen are to your
                service and how the kitchen design is a significant contributor
                to your efficiency and brigade well-being.
              </p>
              <p>
                We will work with you to design a solution that meets all of
                your operational needs whilst keeping a focus on sustainability
                and environmental impact. Contact us to book a complimentary
                design consultation.
              </p>
              <button className="btn btn-danger border border-danger my-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
