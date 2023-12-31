import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
        <Route path="/full-stack_developer" element={<App role="full-stack_developer"/>} />
        <Route path="/videogame_developer" element={<App role="videogame_developer"/>} />
      <Route path="*" element={<App role="full-stack_developer"/>} />
    </Routes>
  </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
