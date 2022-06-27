import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import App from './App';



ReactDOM.render(
  <Suspense fallback={<h1>Loading...</h1>}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

