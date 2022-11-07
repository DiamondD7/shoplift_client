import React, { useState } from "react";

import "../../styles/details.css";
const Details = (props) => {
  const [counter, setCounter] = useState(1);
  const [numCart, setNumCart] = useState(1);

  const decCounter = () => {
    if (counter === 1) {
      return counter;
    }
    setCounter((prevCounter) => prevCounter - 1);
  };

  const addCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const addCart = () => {
    setNumCart((prevNumCart) => prevNumCart + 1);
    props.cartfunc(numCart, props.current, counter);
  };

  return (
    <div>
      <div className="contents">
        <div className="product-container">
          <img src={props.current.productImage} />
          <div className="product-details">
            <p className="name">{props.current.productName}</p>
            <p className="price">${props.current.productPrice}</p>
            <p className="description">
              {props.current.productDescription} Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Dolorum obcaecati illo consequuntur
              dolores harum cum itaque eveniet, perspiciatis necessitatibus
              fugiat vitae reiciendis, facilis minima possimus accusamus
              voluptate provident laboriosam nobis!
            </p>
            <p className="dimensions">
              Dimensions: {props.current.productDimensions}
            </p>
            <p className="color">
              Color:
              <span style={{ color: `${props.current.productColor}` }}>
                {" "}
                {props.current.productColor}
              </span>
            </p>
            <div className="product-quantity">
              <button className="btn-decrease" onClick={decCounter}>
                -
              </button>
              <p className="counter">{counter}</p>
              <button className="btn-increase" onClick={addCounter}>
                +
              </button>
            </div>
            <div className="transactions-btn">
              <button className="btn-addtocart" onClick={addCart}>
                Add to Cart
              </button>
              <button className="btn-buynow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
