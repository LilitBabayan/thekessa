import React from 'react';
import Home from "./views/user/Home";
import {Route, Switch} from "react-router-dom";
import About from "./views/user/About";
import Ingredients from "./views/user/Ingredients";
import Shop from "./views/user/Shop";


function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/ingredients" component={Ingredients}/>
            <Route exact path="/shop" component={Shop}/>
        </Switch>
    );
}

export default Main



