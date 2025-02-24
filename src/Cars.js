import React from "react";
const Cars = ({ car }) => {
  return (
    <div style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <h3>{car.make}</h3>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default Cars;
