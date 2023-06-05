import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClickThrough from './ClickThrough';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={null}>
    <div id="container">
      <ClickThrough />
    </div>
    <div className="dot" />
  </Suspense>
);
