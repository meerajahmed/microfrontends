import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingRoot from './src/components/MarketingRoot';
import Header from './src/components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: '_cont'
});

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header />
                <MarketingRoot />
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;