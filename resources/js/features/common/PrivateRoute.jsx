
import React from 'react';
import {Redirect, RouteProps, Route}    from 'react-router-dom';
export default function PrivateRoute(props  ) {
    const isLoggedIn=Boolean(localStorage.getItem('access_token'));
    if(!isLoggedIn) return <Redirect to={'/'} />;
    return <Route {...props} />;


}