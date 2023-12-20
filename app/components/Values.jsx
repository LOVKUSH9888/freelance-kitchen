import React from "react";
import Image from "next/image";
import "./Values.css"

const Values = () => {
  return (
    <>
      <div
        className="lovebag"
        style={{
          backgroundImage: 'url("https://instrumental.com/wp-content/uploads/2021/03/AdobeStock_292343190-scaled.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container p-5">
          <div className="row d-flex align-items-center text-white">
            <div className="col-md-6">
              {/* <div className="image-container">
                <Image
                  className="img-fluid mx-auto d-block rounded-circle shadow"
                  src="/asset4.png"
                  width={500}
                  height={800}
                  alt="Core Values Image"
                />
              </div> */}
            </div>
            <div className="col-md-6">
              <h2>Our Core Values</h2>
              <p>
                <b>Excellence:</b> We are committed to delivering excellence in every
                aspect of our work, from design and sales to installation and
                aftercare. Our team of highly trained service and maintenance
                catering engineers ensures that every project, big or small, meets
                the highest standards.
              </p>
              <p>
                <b>Innovation:</b> With over three decades of experience, innovation is
                ingrained in our DNA. We stay ahead of industry trends, embracing
                new technologies and creative solutions to provide our clients
                with state-of-the-art kitchen and hospitality solutions.
              </p>
              <p>
                <b>Client-Focused Approach:</b> Your success is our success. Our
                client-focused approach means that we collaborate closely with you
                to understand your unique requirements, ensuring that our
                solutions align perfectly with your vision and goals.
              </p>
              <button className="btn btn-danger border border-danger my-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
