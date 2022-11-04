import React from "react";
import Home from "./components/Home";
import Browse from "./components/Browse";

const App = () => {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/browse":
      component = <Browse />;
      break;
    default:
      console.log("Switch error");
      break;
  }
  return <div>{component}</div>;
};

export default App;
