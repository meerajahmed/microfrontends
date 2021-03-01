import React, { lazy, Suspense, useState } from 'react';
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
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthRootLazy onSignIn={() => setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/" component={MarketingRootLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;