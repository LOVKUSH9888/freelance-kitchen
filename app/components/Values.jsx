import React from "react";
import Image from "next/image";
import "./Values.css";

const Values = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0 text-dark">
        <div className="row d-flex align-items-center">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="image-container">
              <Image
                className="img-fluid"
                src="/rowdy.jpg"
                layout="responsive"
                objectFit="cover"
                width={1200} // Set an arbitrary large width
                height={100}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
