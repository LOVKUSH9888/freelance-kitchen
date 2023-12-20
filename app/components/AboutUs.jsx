import React from "react";
import "./AboutUs"
const AboutUs = () => {
  return (
    <>
      <div className="bg-dark text-white p-5">
        <div className="container">
          <div className="row">
            <div className="col-4 animate-left">
              <h2><b>About Us</b></h2>
            </div>
            <div className="col-8 animate-right">
              <h3>With Us, Nothing’s Off The Menu.</h3>
              <p>
                We all love FOOD. The phrase ‘Delicious FOOD’ is enough to
                connect us to this industry of Commercial Kitchen. We Design
                Commercial Kitchen Equipment’s and undertake complete
                commissioning and setup of Commercial Kitchens for hotels,
                restaurants, hospitals, food courts, educational institutions,
                industrial canteens, take away joints, bar, lounges, cafes and
                other food service or food serving outlets.
              </p>
              <br />
              <p>
                We Design all products and serve all our customers across North
                India and the Middle East. We have a team of engineers and
                professionals who design and define the exact dimensions using
                the latest Computer Aided Design Systems to give you a flawless
                product. We continuously work with our customers to give the
                best possible products and the best price possible in different
                regions in India. We don't just sell products... We service our
                customers!
              </p>
              <button className="btn btn-danger border border-danger my-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
