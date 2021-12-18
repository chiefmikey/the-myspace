import 'airbnb-browser-shims';
import 'the-new-css-reset/css/reset.css';
import './styles.css';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import configureStore from './redux/configureStore';

const history = createBrowserHistory();
const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.querySelector('#app'),
);
