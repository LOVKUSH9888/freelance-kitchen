import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          {/* Contact Form (col-6) */}
          <div className="col-lg-6">
            <h2>Contact Us</h2>
            <form>
              {/* Your contact form fields go here */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Google Maps Iframe (col-6) */}
          <div className="col-lg-6">
            <h2>Our Location</h2>
            {/* Replace the iframe src attribute with your Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9372057283674!2d-122.41941638465351!3d37.77492977975442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e077e05a9f7%3A0x1a6a7d63e49ac9!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1626330049156!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
