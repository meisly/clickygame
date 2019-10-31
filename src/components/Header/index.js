import React from "react";
import "./style.css";


function Header(props) {
  return (
    <div>
    <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
      <h1>
        Clicky Game
      </h1> 
    </a>
    <div className="left bottom">
      <h3 className="text-white">Score: {props.score}</h3>
      <h3 className="text-white">Level: {props.level}</h3>
    </div>
    </nav>
    
    </div>
  );
}

export default Header;
