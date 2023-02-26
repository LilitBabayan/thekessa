import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "../Router";
import {Provider} from "react-redux";
import store from "../redux/store";


class Index extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route component={Main}/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Index;


if (document.getElementById('index')) {
    ReactDOM.render(<Index/>, document.getElementById('index'));
}
