import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import uiReducer from './reducers/uiReducer';
import { Map } from 'immutable';


const store = createStore(
  uiReducer,
  Map(),
  applyMiddleware(thunk)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);