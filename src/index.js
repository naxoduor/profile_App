import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import rootReducer from './reducer'

const initialState = [];
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({})),
    )
    );

    const app = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
ReactDOM.render(app, document.getElementById('root'));
