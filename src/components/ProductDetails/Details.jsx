import React from "react";

import "../../styles/details.css";
const Details = (props) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
