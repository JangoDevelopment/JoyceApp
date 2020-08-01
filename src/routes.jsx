import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

/****IMPORT PAGES******/

import Home from "./pages/Home";
import Contact from "./pages/Contact";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Contact} exact path="/contato" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
