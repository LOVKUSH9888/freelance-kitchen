import React from "react";


// Provide the online link for the background image
const backgroundImageUrl =
  "https://www.samtell.com/hubfs/Webpage%20Assets/SamTell_DBS_Supply1.jpg";

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
          minHeight: "40vh", // Adjust as needed
        }}
      >
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Values;
