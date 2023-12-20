import React from "react";
import "./Services.css";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="container p-5 ">
        <div className="row ">
          <h1>Services</h1>
          <div id="cards_landscape_wrap-2">
            <div className="container">
              <div className="row">
                {/* Service 1 */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 d-flex flex-column">
                  <a href="">
                    <div className="card-flyer d-flex flex-column">
                      <div className="text-box">
                        <div className="image-box">
                          <Image
                            className="img-fluid"
                            src="/asset4.png"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="text-container flex-grow-1">
                          <h6>Commercial Kitchen, Ventilation & Bar Design</h6>
                          <p>
                            Our highly experienced designers can work with you
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
                            src="/asset4.png"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="text-container flex-grow-1">
                          <h6>
                            Supply of quality products from renowned brands
                          </h6>
                          <p>
                            We provide a full supply service, with a wide range
                            of products to choose from to suit your needs.
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
                            src="/asset4.png"
                            width={500}
                            height={500}
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
                            src="/asset4.png"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="text-container flex-grow-1">
                          <h6>Project Management</h6>
                          <p>
                            Our project managers are on hand to help every step
                            of the way, from design, to installation and through
                            to completion with the expertise.
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
