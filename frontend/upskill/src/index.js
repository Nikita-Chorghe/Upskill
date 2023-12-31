import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import {Route,Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(process.env.NODE_ENV);

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "/api"
    : "http://localhost:8000/api/";

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
