import React from 'react';
import Home from "./views/user/Home";
import {Route, Switch} from "react-router-dom";
import About from "./views/user/About";
import Ingredients from "./views/user/Ingredients";
import Shop from "./views/user/Shop";
import Register from "./views/user/Register";
import Login from "./views/user/Login";
import ProductPage from "./views/user/ProductPage";
import CheckoutInformation from "./views/user/CheckoutInformation";
import CheckoutShipping from "./views/user/CheckoutShipping";
import CheckoutPayment from "./views/user/CheckoutPayment";
import NotFound from "./views/NotFound";
import ForgotPassword from "./views/user/ForgotPassword";
import ResetPassword from "./views/user/ResetPassword";
import PrivacyPolicy from "./views/user/PrivacyPolicy";
import TermsAndConditions from "./views/user/TermsAndConditions";


function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/ingredients" component={Ingredients}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/sign_up" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/forgot_password" component={ForgotPassword}/>
            <Route exact path="/password/reset/:token" component={ResetPassword}/>
            <Route exact path="/product/:id" component={ProductPage}/>
            <Route exact path="/checkout/information" component={CheckoutInformation}/>
            <Route exact path="/checkout/shipping" component={CheckoutShipping}/>
            <Route exact path="/checkout/payment" component={CheckoutPayment}/>
            <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
            <Route exact path="/terms-conditions" component={TermsAndConditions}/>
            <Route component={NotFound}/>

        </Switch>
    );
}

export default Main



