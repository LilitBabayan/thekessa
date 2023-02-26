import {withRouter} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import React from "react";
import Header from "../components/Header/Header";

function NotFound() {
    return (
        <div>
            <Header/>
            <div className={`container text-center`}>
                <h1 className={`mainColor fw-bolder display-1 my-5`}>Oops!</h1>
                <h2 className={`fw-bolder`}>404</h2>
                <h2 className={`fw-bolder mb-5`}>The page you were looking for couldn't be found</h2>

            </div>
            <Footer fixed={true}/>

        </div>
    )
}
export default withRouter(NotFound)
