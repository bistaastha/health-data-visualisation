import React, { Component } from "react";
import MinMaxPieChart from "./../charts/minMaxPieChart";
import StackedMinMaxBarChart from "./../charts/stackedMinMaxBarChart";
import MinMaxBarChart from "./../charts/minMaxBarChart";
import "./../index.css";
let cityName = "nainital";
let monthName = "jan";
class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "nainital",
      monthName: "feb"
    };
  }

  //Include data fetching here


  componentDidMount() {
    console.log("running");
  }
  nameHandler(mname, cname) {
    this.setState( {
      cityName:cname, 
      monthName:mname
    })
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
                    onClick={() => this.nameHandler("all")}
                  >
                    All months
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("jan", this.state.cityName)}
                  >
                    January
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("feb", this.state.cityName)}
                  >
                    February
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("march", this.state.cityName)}
                  >
                    March
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("sep", this.state.cityName)}
                  >
                    September
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("nov", this.state.cityName)}
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
                    onClick={() => this.nameHandler(this.state.monthName, "nainital")}
                  >
                    Nainital
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler(this.state.monthName, "haridwar")}
                  >
                    Haridwar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="chart">
        <MinMaxBarChart cityName={this.state.cityName} monthName={this.state.monthName}/>
        <MinMaxPieChart cityName={this.state.cityName} monthName={this.state.monthName}/>
        </div>
        <StackedMinMaxBarChart cityName={this.state.cityName} monthName={this.state.monthName}/>
      </>
    );
  }
}
//The charts will be added here
export default IndexPage;
