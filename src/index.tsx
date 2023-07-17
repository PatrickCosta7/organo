import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')!); //o ! está sendo usado para garantir que nesse id será retornado um elemento.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

