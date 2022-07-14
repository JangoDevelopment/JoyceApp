import React from "react";
import { Route, HashRouter, Switch, BrowserRouter } from "react-router-dom";

/****IMPORT PAGES******/

import SinglePage from "./pages/SinglePage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portifolio from "./pages/Portifolio";
import Apresentacao from "./pages/Apresentacao";
import Projeto from "./pages/Project";
const Routes = () => {

    return (
        // <HashRouter>
        //     <Switch>
            <BrowserRouter>
                <Route component={SinglePage} exact path="/" />
                {/* <Route component={Home} exact path="/home" />
                <Route component={Contact} exact path="/contato" />
                <Route component={Projeto} path="/projeto" />
                <Route component={Portifolio} exact path="/portifolio" />
                <Route component={Apresentacao} exact path="/apresentacao" /> */}
            </BrowserRouter>
        //     </Switch>
        // </HashRouter>
    );
};

export default Routes;
