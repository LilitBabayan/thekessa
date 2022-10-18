import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "../Router";

class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route component={Main}/>
            </BrowserRouter>
        );
    }
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index/>, document.getElementById('index'));
}
