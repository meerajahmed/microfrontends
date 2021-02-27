import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingRoot from './src/components/MarketingRoot';
import Header from './src/components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import AuthRoot from './src/components/AuthRoot';

const generateClassName = createGenerateClassName({
    productionPrefix: '_cont'
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/auth" component={AuthRoot} />
                    <Route path="/" component={MarketingRoot} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;