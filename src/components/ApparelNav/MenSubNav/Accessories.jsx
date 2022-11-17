import React, { useState, useEffect } from "react";
import Details from "../../ProductDetails/Details";
const Accessories = (props) => {
  const [items, setItems] = useState([]);
  const [itemsLoaded, setItemsLoaded] = useState(false);

  const [currentItems, setCurrentitems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetch("https://shopliftserver.azurewebsites.net/accessories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setItemsLoaded(true);
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
      ) : itemsLoaded === true ? (
        <div>
          <h1 className="title-h1">Accessories</h1>
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
      ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Accessories;
