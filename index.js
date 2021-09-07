import React from 'react';
import ReactDOM from 'react-dom';
import HistoricalComponent from './Components/HistoricalComponent/historicalComponent';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header.jsx';
import App from './App';

ReactDOM.render(
  <React.StrictMode  style={{background:"#212529"}}>
    <App/>
    {/* <Header/>
    <HistoricalComponent/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
