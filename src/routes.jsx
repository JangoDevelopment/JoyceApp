import React from "react";
import { Route, BrowserRouter, HashRouter, Switch } from "react-router-dom";

/****IMPORT PAGES******/

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portifolio from "./pages/Portifolio";
import Apresentacao from "./pages/Apresentacao";
import Projeto from "./pages/Project";
const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Contact} exact path="/contato" />
                <Route component={Projeto} path="/projeto" />
                <Route component={Portifolio} exact path="/portifolio" />
                <Route component={Apresentacao} exact path="/apresentacao" />
            </Switch>
        </HashRouter>
    );
};

export default Routes;
