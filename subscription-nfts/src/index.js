import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import * as ReactDOM from 'react-dom/client';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <App />
);
