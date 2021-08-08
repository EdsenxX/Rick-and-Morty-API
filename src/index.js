/* ------------------------------ Dependencies ------------------------------ */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";
/* ------------------------------- Components ------------------------------- */
import App from './components/App';
import reducers from "./reducers";
/* --------------------------------- Assets --------------------------------- */
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const store = createStore(
  reducers, // Todos los reducers
  {}, // Estado inical
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
