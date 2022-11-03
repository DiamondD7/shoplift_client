import React from "react";
import { ArrowRight } from "phosphor-react";

const Technology = () => {
  return (
    <div>
      <div>
        <div className="tech-advert">
          <p>Tech Sales</p>
          <button className="sale-browse">
            Browse <ArrowRight size={30} />
          </button>
        </div>
        <p className="sale">Sale</p>
      </div>
    </div>
  );
};

export default Technology;
