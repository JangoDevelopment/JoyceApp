import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

/****IMPORT PAGES******/

import Home from './pages/Home'
import Contact from './pages/Contact'

const Routes = () =>{
    return (
        <BrowserRouter>
            <Route component={ Home } exact path="/" />
            <Route component={ Contact } exact path="/contact" />
        </BrowserRouter>
    )
}

export default Routes