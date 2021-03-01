import React from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { Router , Route, Switch } from "react-router-dom"
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: '_auth'
});


const App = ( props ) => {
    const { history, onSignIn } = props;
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    );
};

export default App;