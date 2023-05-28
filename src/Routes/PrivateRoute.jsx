import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    // const Navigation=useNavigation
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()
    if (loader) {
        return <h1>loading.....</h1>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'} state={{from:location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;