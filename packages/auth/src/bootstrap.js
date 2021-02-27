import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App';

const mount = (el, props) => {
    const { 
        onNavigate = () => {}, 
        defaultHistory, 
        initialPath 
    } = props;

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    ReactDOM.render(
        <App history={history} />,
        el
    );

    history.listen(onNavigate);

    const onParentNavigate = ({ pathname: nextPathName}) => {
        const { pathname: currentPathName } = history.location;
        if(currentPathName !== nextPathName) {
            history.push(nextPathName);
        }
    };

    return {
        onParentNavigate,
    }
};

// running app in isolation
if( process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_auth-root__dev');
    if(devRoot) {
        mount(devRoot, {
            defaultHistory: createBrowserHistory()
        });
    }
}

// running app with in container
export { mount };
