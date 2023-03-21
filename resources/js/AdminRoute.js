import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';


function AdminRoute({component: Component, user, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) =>
                user && user.is_admin ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                )
            }
        />
    );
}

export default withRouter(AdminRoute)
