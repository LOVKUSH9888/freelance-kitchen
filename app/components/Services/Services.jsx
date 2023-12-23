import React from "react";
import "./Services.css";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="container fw-semibold">
        <div className="row ">
          <div id="cards_landscape_wrap-2">
            <div className="container p-2">
              <div className="row">
                {/* Service 1 */}
                <h1 className="border-bottom border-dark border-5"><b>Services</b></h1>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 d-flex flex-column">
                  <a href="">
                    <div className="card-flyer d-flex flex-column">
                      <div className="text-box">
                        <div className="image-box">
                          <Image
                            className="img-fluid"
                            src="/king.jpg"
                            width={500}
                            height={500}
                            alt="Image"
                          />
                        </div>
                        <div className="text-container flex-grow-1">
                          <h6>Commercial Kitchen, Ventilation & Bar Design</h6>
                          <p>
                            Our highly experienced designers & engineers can work with you
                            to create your brief.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Service 2 */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 d-flex flex-column">
                  <a href="">
                    <div className="card-flyer d-flex flex-column">
                      <div className="text-box">
                        <div className="image-box">
                          <Image
                            className="img-fluid"
                            src="/hdimg.jpg"
                            width={500}
                            height={500}
                            alt="Image"
                          />
                        </div>
                        <div className="text-container flex-grow-1">
                          <h6>
                            Supply of quality products from renowned brands
                          </h6>
                          <p>
                            We provide a full supply service, with a wide range
                            of products to suit your needs with engineers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Service 3 */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 d-flex flex-column">
                  <a href="">
                    <div className="card-flyer d-flex flex-column">
                      <div className="text-box">
                        <div className="image-box">
                          <Image
                            className="img-fluid"
                            src="/popli.jpg"
                            width={500}
                            height={500}
                            alt="Image"
                          />
                        </div>
                        <div className="text-container flex-grow-1">
                          <h6>Installation by our Gas Safe engineers</h6>
                          <p>
                            We have a team of trusted engineers that adhere to
                            our high standards of working and are highly skilled
                            installers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Service 4 */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 d-flex flex-column">
                  <a href="">
                    <div className="card-flyer d-flex flex-column">
                      <div className="text-box">
                        <div className="image-box">
                          <Image
                            className="img-fluid"
                            src="/asset1.webp"
                            width={500}
                            height={500}
                            alt="Image"
                          />
                        </div>
                        <div className="text-container flex-grow-1">
                          <h6>Project Management</h6>
                          <p>
                            Our project managers are on hand to help every step
                            of the way, from design, to installation and complete with the best suited  experts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
