import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './css/index.css';
import App from './components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
