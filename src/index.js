import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import App from './App';
import Loading from './components/loading/Loading';


ReactDOM.render(
 
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>  
    </Suspense>
  </React.StrictMode>,

  document.getElementById('root')
);

// 