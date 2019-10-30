import React from "react";
import "./style.css";


function Header(props) {
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
      Clicky Game 
    </a>
    </nav>
    <div>
      Score: {props.score}
    </div>
    </div>
  );
}

export default Header;
