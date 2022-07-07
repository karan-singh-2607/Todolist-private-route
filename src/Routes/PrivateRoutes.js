import React from "react";
import { Navigate, Route, } from "react-router-dom";
import { isLogin } from "./isLogin";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                :
                <Navigate to="/login" />
        )

        } />
    )
}

export default PrivateRoute;