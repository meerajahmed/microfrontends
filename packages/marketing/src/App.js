import React from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({
    productionPrefix: '_mark'
});


const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;