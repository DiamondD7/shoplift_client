import React, { useState, useEffect } from "react";
import Details from "./ProductDetails/Details";
import { ShoppingCartSimple } from "phosphor-react";

const Clearance = (props) => {
  const [items, setItems] = useState([]);

  const [currentItems, setCurrentitems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [cartCounter, setCartCounter] = useState(0);
  const [cartItems, setCartItems] = useState(null);
  const [qty, setQty] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products")
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
      {cartCounter > 0 ? <p className="cart-number">{cartCounter}</p> : ""}
      <button className="btn-cart" onClick={() => setOpenCart(!openCart)}>
        <ShoppingCartSimple size={32} color={"#202020"} />
      </button>
      {isOpen ? (
        <Details current={currentItems} cartfunc={props.cartFunc} />
      ) : (
        <div>
          <h1 className="title-h1">Featured Items</h1>
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

export default Clearance;
