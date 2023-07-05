import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Calculate the new margin value based on the window width
      const newMargin = window.innerWidth * 0.1; // Adjust the multiplier according to your needs

      // Update the margin state
      setMargin(newMargin);
    };

    // Add event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to only run the effect once on component mount
  console.log(margin);
  return <div style={{ margin }}>THIS IS ME, VICTOR ARIE LAMBADYA SIRAIT</div>;
};

export default MyComponent;
