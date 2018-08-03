import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import  {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
const store = createStore(
rootReducer,
composeWithDevTools(
    applyMiddleware(thunk)
)

);

ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store}>
    <App />
</Provider>
</BrowserRouter>, 
document.getElementById('root')
);
registerServiceWorker();
