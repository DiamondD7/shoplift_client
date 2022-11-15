import React, { useState, useEffect } from "react";
import Details from "../../ProductDetails/Details";

const WHoodies = (props) => {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentitems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/whoodies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  const openProductDetails = (i) => {
    setCurrentitems(i);
    setIsOpen(true);
    console.log(i);
  };

  return (
    <div className="cont-div">
      {isOpen ? (
        <Details current={currentItems} cartfunc={props.cartFunc} />
      ) : (
        <div>
          <h1 className="title-h1">Dress</h1>
          <div className="cont">
            {items.map((item, index) => (
              <div className="card-container" key={index}>
                <button
                  className="btn-image"
                  onClick={() => openProductDetails(item)}
                >
                  <img src={item.productImage} />
                </button>
                <p className="productName">{item.productName}</p>
                <p className="productPrice">${item.productPrice}</p>
                <p className="productColor">Color: {item.productColor}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WHoodies;
