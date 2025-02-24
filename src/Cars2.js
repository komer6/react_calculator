import React from "react";
import Cars from "./Cars"; 

export const Cars2 = () => {
  const cars = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2020,
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2019,
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2021,
    },
    {
      make: "Chevrolet",
      model: "Malibu",
      year: 2018,
    },
    {
      make: "Nissan",
      model: "Altima",
      year: 2022,
    },
  ];

  return (
    <div>
      <h2>Cars</h2>
      {cars.map((car, index) => (
        <Cars key={index} car={car} /> 
      ))}
    </div>
  );
};
