import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    const location=useLocation()
    console.log(location)
    const noheaderFooter=location.pathname.includes('login') || location.pathname.includes('singup')
    console.log(noheaderFooter)
    return (
        <div>
          {noheaderFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
         {noheaderFooter ||   <Footer></Footer>}
        </div>
    );
};

export default Main;