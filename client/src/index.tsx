import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './pages/Router';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
