import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'modern-normalize/modern-normalize.css';
import './style/base.scss';
// import AuthProvider from './contexts/auth/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
);
