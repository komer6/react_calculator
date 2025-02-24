// ProductRow.js
import React from 'react';

const ProductRow = ({ prod, index }) => { 
  const getColor = (num) => {
    return num % 2 === 0 ? "red" : "green";
  };

  return (
    <tr style={{ backgroundColor: getColor(index) }}>
      <td>{prod.name}</td>
      <td>{prod.category}</td>
      <td>{prod.price}</td>
      <td>{prod.quantity}</td>
      <td>{prod.unit}</td>
    </tr>
  );
};

export default ProductRow;
