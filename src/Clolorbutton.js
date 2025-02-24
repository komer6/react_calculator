import React from "react";

const ColorButton = ({ setBgColor }) => {
  const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <button
      onClick={() => setBgColor(getRandomRGB())}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Change Background Color
    </button>
  );
};

export default ColorButton;
