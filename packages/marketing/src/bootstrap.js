import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const mount = (el) => {
    ReactDOM.render(
        <App />,
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