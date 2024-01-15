import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={null}>
    <div id="container">
      <App />
    </div>
    <div className="dot" />
  </Suspense>
);
