import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Header from './src/components/Header';
import Progress from './src/components/Progress'

const AuthRootLazy = lazy(() => import('./src/components/AuthRoot'));
const MarketingRootLazy = lazy(() => import('./src/components/MarketingRoot'));

const generateClassName = createGenerateClassName({
    productionPrefix: '_cont'
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth" component={AuthRootLazy} />
                        <Route path="/" component={MarketingRootLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;