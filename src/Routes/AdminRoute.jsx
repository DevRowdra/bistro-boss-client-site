import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const PrivateRoute = ({children}) => {
 const [isAdmin,isAdminLoading]=useAdmin()
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()
   if (loader || isAdminLoading) {
    return <h1>loading................</h1>
   }
   if (user && isAdmin) {
    return children
   }
    return (
        <Navigate to={'/login'} state={{from:location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;