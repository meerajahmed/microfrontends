import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import Header from './src/components/Header';
import Progress from './src/components/Progress'

const AuthRootLazy = lazy(() => import('./src/components/AuthRoot'));
const MarketingRootLazy = lazy(() => import('./src/components/MarketingRoot'));
const DashboardRootLazy = lazy(() => import('./src/components/DashboardRoot'));

const generateClassName = createGenerateClassName({
    productionPrefix: '_cont'
});

const history = createBrowserHistory();

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if(isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthRootLazy onSignIn={() => setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/dashboard">
                            {isSignedIn ? <DashboardRootLazy /> : <Redirect to="/" />}                            
                        </Route>
                        <Route path="/" component={MarketingRootLazy} />
                    </Switch>
                </Suspense>
            </Router>
        </StylesProvider>
    );
};

export default App;