import React from "react";
import "./style.css";

function Wrapper(props) {
  //resize images based on size of img collection
  let elems = props.total;
  let cols = 3* Math.floor(Math.sqrt(elems));
  let size = 100/cols;
  let mobSize = 180/cols;
  document.documentElement.style
    .setProperty('--image-size', `${size}vw`);
  document.documentElement.style
    .setProperty('--image-size-mobile', `${mobSize}vw`);


  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
