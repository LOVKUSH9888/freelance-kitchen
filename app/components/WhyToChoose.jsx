import React from "react";
import { CSSTransition } from "react-transition-group";
import "./AboutUs.css"
const WhyToChoose = () => {
  return (
    <>
      <div className="love-bag text-dark p-5 fw-semibold">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <h2><b>Why Choose US?</b></h2>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <p>
                <b>Diverse Portfolio:</b> From pop-up eateries to renowned
                Michelin-starred restaurants, our diverse portfolio showcases
                our adaptability and expertise in catering to the unique needs
                of our clients.
              </p>

              <p>
                <b>Unique Solutions:</b> We dont believe in one-size-fits-all
                solutions. Our team thrives on creating bespoke, tailor-made
                solutions that elevate your kitchen and hospitality spaces to
                new heights.
              </p>
              <p>
                <b>Passion for Perfection:</b> Our passion for perfection is evident in
                every project we undertake. We dont just build kitchens; we
                create environments that inspire culinary excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyToChoose;
