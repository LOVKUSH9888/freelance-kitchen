import React from "react";
import "./WhatWeDo.css";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="container bg-dark text-white">
      <div className="row">
      <h1>What We Do?</h1>
        <h3>From Design To Installation</h3>
        {/* Cards */}
        <div id="cards_landscape_wrap-2">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <Image
                          className="img-fluid"
                          src="/asset4.png"
                          width="500"
                          height="500"
                        />
                      </div>
                      <div className="text-container">
                        <h6>KITCHEN DESIGN & FIT OUT</h6>
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
                          src="/asset4.png"
                          width="500"
                          height="500"
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
                          src="/asset4.png"
                          width="500"
                          height="500"
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
                          src="/asset4.png"
                          width="500"
                          height="500"
                        />
                      </div>
                      <div className="text-container">
                        <h6>MANFACTURING SERVICES & MAINTAINANCE</h6>
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
