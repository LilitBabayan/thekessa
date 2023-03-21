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
import AdminRoute from "./AdminRoute";
import AdminDashboard from "./views/admin/Dashboard";
import AdminUsers from "./views/admin/Users";
import {useSelector} from "react-redux";


function Main() {

    const user = useSelector((state) => state.user);
    console.log(555,user)

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

            {user && user.is_admin ? (
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} user={user}/>
            ) : null}

            {user && user.is_admin ? (
                <AdminRoute exact path="/admin/users" component={AdminUsers} user={user}/>
            ) : null}

            <Route component={NotFound}/>

        </Switch>
    );
}

export default Main



