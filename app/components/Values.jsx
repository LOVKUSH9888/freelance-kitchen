import React from "react";
import "./Values.css";

// Provide the online link for the background image
const backgroundImageUrl =
  "https://steelkitchenweb.com/wp-content/uploads/2021/05/commercial_CL-2.jpg";

const Values = () => {
  return (
    <>
      <div
        className="container-fluid p-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`, // Use the online link
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "60vh", // Adjust as needed
        }}
      >
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Values;
