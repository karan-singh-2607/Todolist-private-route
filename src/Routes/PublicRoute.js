import React from "react";
import { Navigate, Route, } from "react-router-dom";
import { isLogin } from "./isLogin";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Navigate to='/todo' />
                :
                <Component {...props} />
        )} />
    )
}
export default PublicRoute;