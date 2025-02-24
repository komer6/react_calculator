import React, { useState } from "react";

const Groc = () => {
  const products = [
    { id: 1, name: "Apple", category: "Fruits", price: 0.5, quantity: 10, unit: "kg" },
    { id: 2, name: "Milk", category: "Dairy", price: 1.2, quantity: 2, unit: "liters" },
    { id: 3, name: "Bread", category: "Bakery", price: 2.0, quantity: 1, unit: "loaf" },
    { id: 4, name: "Eggs", category: "Dairy", price: 3.5, quantity: 12, unit: "pieces" },
    { id: 5, name: "Carrots", category: "Vegetables", price: 1.0, quantity: 5, unit: "kg" },
    { id: 6, name: "Chicken Breast", category: "Meat", price: 5.0, quantity: 1, unit: "kg" },
    { id: 7, name: "Rice", category: "Grains", price: 2.5, quantity: 1, unit: "kg" },
    { id: 8, name: "Tomatoes", category: "Vegetables", price: 1.5, quantity: 2, unit: "kg" },
    { id: 9, name: "Cheese", category: "Dairy", price: 4.0, quantity: 0.5, unit: "kg" },
    { id: 10, name: "Orange Juice", category: "Beverages", price: 3.0, quantity: 1, unit: "liter" }
  ];

  const getColor = (num) => {
    return num % 2 === 0 ? "red" : "green";
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price ($)</th>
          <th>Quantity</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr key={prod.id} style={{ backgroundColor: getColor(prod.id) }}>
            <td>{prod.name}</td>
            <td>{prod.category}</td>
            <td>{prod.price}</td>
            <td>{prod.quantity}</td>
            <td>{prod.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Groc;
