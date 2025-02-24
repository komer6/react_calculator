import React, { useState } from "react";
import { getproductsbycategories, getAllCategories } from "./datas";
import ProductRow from "./ProductRow"; // Import ProductRow component
import "./Groc.css"

const Groc = (props) => {
  const [products, setProducts] = useState(getproductsbycategories("*"));
  const categories = getAllCategories();

  const handleCategoryChange = (category) => {
    setProducts(getproductsbycategories(category));
  };

  return (
    <div className="groc-container">
      <div className="buttons">
        <button onClick={() => handleCategoryChange('*')}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>

      <table className="table" border="1">
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
          {products.map((prod, ind) => (
            <ProductRow key={ind} prod={prod} index={ind} /> // Pass prod and index as props
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Groc;
