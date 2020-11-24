import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from './common/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import MinMaxPieChart from './charts/minMaxPieChart';
import MinMaxBarChart from './charts/minMaxBarChart';

ReactDOM.render(
  <>
  <Navbar/>
  <div className="chart-alignment">
  <MinMaxPieChart className="pie-chart chart"/>
  <MinMaxBarChart className="bar-chart chart"/>
  <MinMaxPieChart className="pie-chart chart"/>
  <MinMaxBarChart className="bar-chart chart"/>
  </div>
  </>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
