import React from 'react';
import ReactDOM from 'react-dom/client';
import {StarshipsContextProvider} from './context/StarshipsContext'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarshipsContextProvider>
      <App />
    </StarshipsContextProvider>
  </React.StrictMode>
);


