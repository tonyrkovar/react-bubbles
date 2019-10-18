import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { reducer } from './reducers/reducer'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , rootElement);
