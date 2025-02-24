import React, { useState } from "react";

const Buttonn = () => {
  const [first, setFirst] = useState(0);
  const [colo, scolo] = useState("white");
  const [rgbValue, setRgbValue] = useState("rgb(255, 255, 255)"); // Initial RGB value

  const samp = () => {
    setFirst((prev) => prev + 1);
  };

  const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    scolo(newColor);
    setRgbValue(newColor); // Store the RGB value for display
  };

  const handleClick = () => {
    samp();
    getRandomRGB();
  };

  const handleReset = () => {
    setFirst(0);
    scolo("white"); // Reset color to white
    setRgbValue("rgb(255, 255, 255)"); // Reset RGB value
  };

  return (
    <div className="button-container">
      <button onClick={handleClick} style={{ backgroundColor: colo }} className="count-button">
        {first}
      </button>
      <button onClick={handleReset} className="reset-button">Reset</button>
      <p style={{ marginTop: "10px" }}>Current RGB: {rgbValue}</p>
    </div>
  );
};

export default Buttonn;
