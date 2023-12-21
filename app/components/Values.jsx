import React from "react";
import Image from "next/image";
import "./Values.css";

const Values = () => {
  return (
    <>
      <div
        className="lovebag"
        style={{
          backgroundImage:
            'url("https://erpnews.com/v2/wp-content/uploads/2021/11/chef-garnishing-food-at-commercial-kitchen-counter-2021-08-28-23-55-23-utc.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid p-5">
          <div className="row d-flex align-items-center text-white">
            <div className="col-md-6">
              <div className="love-bag p-3 bg-opacity-75 rounded">
              <h2>
                <b>Our Core Values</b>
              </h2>
              <p>
                <b>Excellence:</b> We are committed to delivering excellence in
                every aspect of our work, from design and sales to installation
                and aftercare. Our team of highly trained service and
                maintenance catering engineers ensures that every project, big
                or small, meets the highest standards.
              </p>
              <p>
                <b>Innovation:</b> With over three decades of experience,
                innovation is ingrained in our DNA. We stay ahead of industry
                trends, embracing new technologies and creative solutions to
                provide our clients with state-of-the-art kitchen and
                hospitality solutions.
              </p>
              <p>
                <b>Client-Focused Approach:</b> Your success is our success. Our
                client-focused approach means that we collaborate closely with
                you to understand your unique requirements, ensuring that our
                solutions align perfectly with your vision and goals.
              </p>
              <button className="btn btn-light my-button">
                Read More
              </button>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
