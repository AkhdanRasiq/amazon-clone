import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/styles.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import router from './static/router'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {router.map((data) => (
          <Route key={data.id} path={data.path} element={<data.element />} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
