import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import App from './App';



ReactDOM.render(
  
  <React.StrictMode>
    {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>  
    {/* </Suspense> */}
  </React.StrictMode>,

  document.getElementById('root')
);

// 