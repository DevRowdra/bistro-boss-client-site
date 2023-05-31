import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const{googleSingIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const form=location.state?.from?.pathname || '/'
    const handleGoogleLogin=()=>{
        
        googleSingIn()
        .then(result=>{
            const loggedInUser=result.user
            console.log(loggedInUser)
            const saveUser = { user: loggedInUser.name, email: loggedInUser.email };
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
              
              
            });
            navigate(form,{replace:true})



    })}
    return (
        <div>
            <div className="divider"></div>
          <div className='w-full text-center my-8'>
          <button onClick={handleGoogleLogin} className='btn btn-circle btn-outline'>
                G
            </button>
          </div>
        </div>
    );
};

export default SocialLogin;