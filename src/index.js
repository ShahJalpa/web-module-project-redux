import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers'; //added

import { createStore } from "redux"; //added
import { Provider } from "react-redux"; //added

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer) //store created

const rootElement = document.getElementById('root');
ReactDOM.render(
    //App is wrapped in provider
    <Provider store = { store }>
        <App />
    </Provider>, rootElement);
