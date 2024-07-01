import React from 'react';
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({loggedIn, children}){
    if(!loggedIn){
        return <Navigate to ='/' replace/>
    }
    return children
}