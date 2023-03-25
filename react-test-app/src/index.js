import React from 'react';
import ReactDOM from 'react-dom/client';

//Crico: después de borrar archivos del proyecto, se deshabilita esto
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import App from "./App";
//Se ponen llaves pq se puso export
//en el archivo App.js a la función directa
import {App} from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//Crico: después de borrar archivos del proyecto, se deshabilita esto
// reportWebVitals();
