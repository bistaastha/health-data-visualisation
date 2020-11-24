import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light nav__formatting">
          <h1 className="navbar__brand">healthViz</h1>
          <div className="dropdown ml-auto">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              File Selection
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li>
                Nainital-Feb
              </li>
              <li>
                Nainital Jan
              </li>
              <li>
                Nainital March
              </li>

              <li>
                Nainital November
              </li>

              <li>
                Nainital September
              </li>
            </ul>
          </div>
        </nav>
      </>
      //TODO: Add toggles by year
    );
  }
}

export default Navbar;
