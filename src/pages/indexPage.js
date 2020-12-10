import React, { Component } from "react";
import MinMaxPieChart from "./../charts/minMaxPieChart";
import StackedMinMaxBarChart from "./../charts/stackedMinMaxBarChart";
import MinMaxBarChart from "./../charts/minMaxBarChart";
import "./../index.css";
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
                  Select region and month
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("jan", "nainital")}
                  >
                    Nainital-January
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("feb", "nainital")}
                  >
                    Nainital-February
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("march", "nainital")}
                  >
                    Nainital-March
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("sep", "nainital")}
                  >
                    Nainital-September
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("nov", "nainital")}
                  >
                    Nainital-November
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("jan", "haridwar")}
                  >
                    Haridwar-January
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("feb","haridwar")}
                  >
                    Haridwar-February
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("march", "haridwar")}
                  >
                    Haridwar-March
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("may", "haridwar")}
                  >
                    Haridwar-May
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("jun", "haridwar")}
                  >
                    Haridwar-June
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("july", "haridwar")}
                  >
                    Haridwar-July
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("aug", "haridwar")}
                  >
                    Haridwar-August
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("march", "haridwar")}
                  >
                  Haridwar-September
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("nov", "haridwar")}
                  >

Haridwar-November
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.nameHandler("dec", "haridwar")}
                  >
                  Haridwar-December
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
    <h1 className="h1-style">{`Visualisations for ${this.state.cityName}-${this.state.monthName} for the year 2015-16`}</h1>
        <div>
        <MinMaxBarChart cityName={this.state.cityName} monthName={this.state.monthName} />
        <MinMaxPieChart cityName={this.state.cityName} monthName={this.state.monthName}/>
        </div>
        <StackedMinMaxBarChart cityName={this.state.cityName} monthName={this.state.monthName}/>
      </>
    );
  }
}
//The charts will be added here
export default IndexPage;
