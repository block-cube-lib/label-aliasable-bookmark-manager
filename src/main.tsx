import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-helmet-async';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { auth } from './infrastructure/firebase';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
