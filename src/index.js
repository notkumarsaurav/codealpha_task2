import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const toggle = document.querySelector('#toggle input');

function clickHandler() {
    if (this.checked) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
}
toggle.addEventListener('click', clickHandler);


