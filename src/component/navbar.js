import React from 'react';
import { Component } from 'react';


class Navbar extends Component {
    state = {  } ;
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Shopping cart
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      
    </div>
  </div>
</nav>

        );
    }
}
 
export default Navbar;
