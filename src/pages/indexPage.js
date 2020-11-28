import React, { Component } from "react";
import MinMaxBarChart from "./../charts/minMaxBarChart";
import MinMaxPieChart from "./../charts/minMaxPieChart";


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "nainital",
      monthName: "feb"
    };
  }

  componentDidMount() {
    console.log(this.state.monthName);
    console.log(this.state.cityName);
  }
  cityNameHandler(cname) {
    this.setState({ cityName: cname });
    console.log(this.state);
  }

  monthNameHandler(mname) {
    this.setState({ monthName: mname });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light nav__formatting">
          <h1 className="navbar__brand">healthDataViz</h1>
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
                  <button
                    className="dropdown-item"
                    onClick={() => this.monthNameHandler("all")}
                  >
                    All months
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.monthNameHandler("jan")}
                  >
                    January
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.monthNameHandler("feb")}
                  >
                    February
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.monthNameHandler("march")}
                  >
                    March
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.monthNameHandler("sep")}
                  >
                    September
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.monthNameHandler("nov")}
                  >
                    November
                  </button>
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
                  <button
                    className="dropdown-item"
                    onClick={() => this.cityNameHandler("nainital")}
                  >
                    Nainital
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.cityNameHandler("haridwar")}
                  >
                    Haridwar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <MinMaxBarChart cityName={this.state.cityName} monthName={this.state.monthName} />
        <MinMaxPieChart cityName={this.state.cityName} monthName={this.state.monthName} />
      </>
    );
  }
}
//The charts will be added here
export default IndexPage;
