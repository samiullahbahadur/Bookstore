import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './assets/App.css';
import store from './redux/configureStore';

ReactDOM.render(
  <Router>
    <Provider store={store} />
    <App />
  </Router>,
  document.getElementById('root'),
);
