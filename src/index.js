import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//  importing auth context
import AuthState from './context/auth/AuthState';
ReactDOM.render(
  // adding auth context to the app
  <AuthState>
    <App />
  </AuthState>,
  document.getElementById('root')
);
