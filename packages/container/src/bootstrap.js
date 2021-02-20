import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
};

mount(document.getElementById('root'));

