import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Todo />
  </React.StrictMode>
);
