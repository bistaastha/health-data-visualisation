import React, { Component } from 'react';
let cityName = 'nainital';
let monthName = 'jan';


class IndexPage extends Component {

    componentDidMount(){
        console.log(monthName);

        console.log(cityName);
    }
    cityNameHandler(cname){
        cityName = cname;
        console.log(cityName);
    }

    monthNameHandler(mname){
        monthName = mname;
        console.log(monthName);
    }

    render() {
        return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light nav__formatting">
          <h1 className="navbar__brand">healthViz</h1>
          <div className="row top-buffer ml-auto">
            <div className="col">
              <div className="dropdown">
                <button
                  className="btn btn-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  Month selection
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button className="dropdown-item" onClick={() => this.monthNameHandler('all')}>All months</button>
                  <button className="dropdown-item" onClick={() => this.monthNameHandler('jan')}>January</button>
                  <button className="dropdown-item" onClick={() => this.monthNameHandler('feb')}>February</button>
                  <button className="dropdown-item" onClick={() => this.monthNameHandler('march')}>March</button>
                  <button className="dropdown-item" onClick={() => this.monthNameHandler('sep')}>September</button>
                  <button className="dropdown-item" onClick={() => this.monthNameHandler('nov')}>November</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row top-buffer ml-auto">
            <div className="col">
              <div className="dropdown">
                <button
                  className="btn btn-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  City selection
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button className="dropdown-item" onClick={() => this.cityNameHandler('nainital')}>Nainital</button>
                  <button className="dropdown-item" onClick={() => this.cityNameHandler('haridwar')}>Haridwar</button>
                </div>
              </div>
            </div>
          </div>

        </nav>

        
      </>)
    }
}
//The charts will be added here
export default IndexPage;