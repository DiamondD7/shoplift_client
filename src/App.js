import React from "react";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Clearance from "./components/Clearance";
import ProductBuy from "./components/ProductBuy";
import Register from "./components/Authentication/Register";

const App = () => {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/browse":
      component = <Browse />;
      break;
    case "/men/jackets":
      component = <Browse />;
      break;
    case "/men/hoodie":
      component = <Browse />;
      break;
    case "/men/shirt":
      component = <Browse />;
      break;
    case "/men/accessories":
      component = <Browse />;
      break;
    case "/men/shoes":
      component = <Browse />;
      break;
    case "/clearance":
      component = <Browse />;
      break;

    case "/buy":
      component = <ProductBuy />;
      break;
    case "/users":
      component = <Register />;
      break;
    default:
      console.log("Switch error");
      break;
  }
  return <div>{component}</div>;
};

export default App;
