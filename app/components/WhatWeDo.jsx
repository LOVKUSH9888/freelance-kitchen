import React from "react";
import "./WhatWeDo.css";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="container mt-1 fw-semibold">
      <div className="row">
        {/* Cards */}
        <div id="cards_landscape_wrap-2">
          <div className="container">
            <div className="row ">
              <h1 className="border-bottom border-dark border-5">
                <b>What We Do?</b>
              </h1>
              <h3 className="">
                <b>From Design To Installation</b>
              </h3>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <Image
                          className="img-fluid"
                          src="/asset5.webp"
                          width="500"
                          height="500"
                          alt="Image"
                        />
                      </div>
                      <div className="text-container">
                        <h6>KITCHEN DESIGN & FIT OUT</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 ">
                <a href="">
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <Image
                          className="img-fluid"
                          src="/asset8.webp"
                          width="500"
                          height="500"
                          alt="Image"
                        />
                      </div>
                      <div className="text-container">
                        <h6>DISH & GLASS WASHING SYTEMS</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <Image
                          className="img-fluid"
                          src="/asset7.webp"
                          width="500"
                          height="500"
                          alt="Image"
                        />
                      </div>
                      <div className="text-container">
                        <h6>VENTILATION & HOODS DESIGN</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <Image
                          className="img-fluid"
                          src="/asset6.webp"
                          width="500"
                          height="500"
                          alt="Image"
                        />
                      </div>
                      <div className="text-container">
                        <h6>MANFACTURING & MAINTAINANCE</h6>
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
  );
};

export default WhatWeDo;
