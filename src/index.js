import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store  from 'store';
import { App } from 'containers';

// import css
import  'normalize.css';
import './assets/styles/index.scss';

ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>,
    document.getElementById('app')
)
