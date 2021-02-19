import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
        el
    );
};

// running app in isolation
if( process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-root__dev');
    if(devRoot) {
        mount(devRoot);
    }
}

// running app with in container