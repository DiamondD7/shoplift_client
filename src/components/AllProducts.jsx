import React, { useState, useEffect } from "react";

import "../styles/allproductStyle.css";

const AllProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  return (
    <div className="cont-div">
      <h1 className="title-h1">Featured Items</h1>
      <div className="cont">
        {items.map((item, index) => (
          <div className="card-container" key={index}>
            <img src={item.productImage} />
            <p className="productName">{item.productName}</p>
            <p className="productPrice">${item.productPrice}</p>
            <p className="productColor">Color: {item.productColor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
