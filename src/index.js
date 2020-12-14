import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import burgerReducer from './redux/reducer/burgerReducer';
import orderReducer from "./redux/reducer/orderReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggingMiddleWare = (store) => {
  return next => {
    return action => {
      console.log("===> " + action.type);
      console.log("===> BEFORE " , store.getState());
      const result = next(action);
      console.log("===> AFTER " , store.getState());

      return result;
    }
  }
}
const reducers = {
  burgerReducer,
  orderReducer
}
const middleWares = [loggingMiddleWare, thunk]
const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(...middleWares)));

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
