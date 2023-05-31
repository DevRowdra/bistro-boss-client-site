import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const Main = () => {
    const location=useLocation()
    console.log(location)
    const noheaderFooter=location.pathname.includes('login') || location.pathname.includes('singup')
    // console.log(noheaderFooter)
    // const{loader}=useContext(AuthContext)
    // if (loader) {
    //   return <h1>loading....</h1>
    // }
    return (
        <div>
          {noheaderFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
         {noheaderFooter ||   <Footer></Footer>}
        </div>
    );
};

export default Main;