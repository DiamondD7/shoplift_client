import React from "react";
import { ArrowRight } from "phosphor-react";

const Apparel = () => {
  return (
    <div>
      <div className="apparel-div">
        <div className="apparel-advert">
          <p>Apparel Sales</p>
          <button className="sale-browse">
            Browse <ArrowRight size={30} />
          </button>
        </div>

        <p className="sale-apparel">Sale</p>
      </div>
    </div>
  );
};

export default Apparel;
