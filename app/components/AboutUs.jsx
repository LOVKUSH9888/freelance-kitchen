import React from "react";
import "./AboutUs";
const AboutUs = () => {
  return (
    <>
      <div className="love-bag text-dark p-5">
        <div className="container fw-semibold">
          <div className="row">
            <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 animate-left">
              <h2>
                <b>About Us</b>
              </h2>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 animate-right ">
              <h3>With Us, Nothing Off The Menu.</h3>
              <p>
                We all love FOOD. The phrase Delicious FOOD is enough to connect
                us to this industry of Commercial Kitchen. We Design Commercial
                Kitchen Equipment and undertake complete commissioning and setup
                of Commercial Kitchens for hotels, restaurants, hospitals, food
                courts, educational institutions, industrial canteens, take away
                joints, bar, lounges, cafes and other food service or food
                serving outlets.
              </p>
              <p>
                We Design all products and serve all our customers across North
                India and the Middle East. We have a team of engineers and
                professionals who design and define the exact dimensions using
                the latest Computer Aided Design Systems to give you a flawless
                product. We continuously work with our customers to give the
                best possible products and the best price possible in different
                regions in India. We dont just sell products... We service our
                customers!
              </p>
              <button className="btn btn-light my-button fw-semibold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
