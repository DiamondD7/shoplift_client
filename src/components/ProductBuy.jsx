import React from "react";
import { CircleWavyCheck } from "phosphor-react";

import "../styles/buy.css";

const ProductBuy = () => {
  return (
    <div>
      <h1 className="buy-statement">Thank you for your purchase!</h1>
      <p className="confirmation">Please see your inbox for the confirmation</p>
      <div className="icon-check">
        <CircleWavyCheck size={62} color={"green"} />
      </div>

      <div className="btn-buy-confirmation">
        <button className="inbox">
          <a href="https://mail.google.com/" target="_blank">
            Inbox
          </a>
        </button>
        <button className="Home">
          <a href="/" className="ad-btn-anchor">
            Home
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProductBuy;
