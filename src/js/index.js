import React from 'react';
import ReactDOM from 'react-dom';
// import reducers from './reducers';
import App from './components/app';
import '../css/main.css';
import movieStore from './stores/movie-store';

ReactDOM.render(
  <App movieStore={movieStore} />
  , document.getElementById('root'));
