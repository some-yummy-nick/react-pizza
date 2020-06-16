import React from 'react';
import {Switch, Route} from "react-router-dom";

import Svg from "components/Svg/Svg";
import Header from "components/Header/Header";
import Index from "components/Index/Index";
import Cart from "components/Cart/Cart";
import NotFound from "components/NotFound/NotFound";

export const App = () =>
    <div className="container">
        <Svg/>
        <Header/>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/cart" component={Cart}/>
            <Route path="/" component={NotFound}/>
        </Switch>
    </div>;

export default App;
