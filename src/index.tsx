import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import axios from 'axios';
import './i18n';
import i18next from 'i18next';

const lang = localStorage.getItem('lang') || 'en';
const theme = localStorage.getItem('theme') || 'light';

axios.defaults.headers.common['Accept-Language'] = lang;
axios.defaults.baseURL = 'https://api.edamam.com';

i18next.changeLanguage(lang);

document.body.className = theme;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

