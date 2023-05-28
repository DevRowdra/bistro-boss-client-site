import React, { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2'
const Login = () => {
    const[disable,setDisable]=useState(true)
    const {singIn}=useContext(AuthContext)
    const location=useLocation()
    const Navigate=useNavigate()
    const forms=location.state?.form?.pathName || '/'

    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        singIn(email,password)
        .then(result=>{
          const user=result.user
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User Login Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          Navigate(forms,{replace:true})
          console.log(user)
        })
        .catch(error=>{
          console.log(error.massage)
        })
    }
    const handlValidateCaptcha=e=>{
        
        const user_captacha_value=e.target.value
        if (validateCaptcha(user_captacha_value)) {
            setDisable(false)
        }else{
            setDisable(true)
        }
        console.log(user_captacha_value)
    }
    useEffect(()=>{
        loadCaptchaEnginge(5);
    },[])
    return (
    <>
    
    <Helmet>
        <title>Bistro Boss|| Login</title>
       </Helmet>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <form onSubmit={handleLogin} className="card w-1/2  max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label  className="label">
          < LoadCanvasTemplate />
          </label>
          <input onBlur={handlValidateCaptcha} type="text"   className="input input-bordered" />
          <button  className="btn btn-xs">Validate</button>
        </div>
        <div className="form-control mt-6">
          <button disabled={false} className="btn btn-primary">Login</button>
        </div>
      </div>
    <p><small>New here? <Link to={'/singup'}>Register</Link></small></p>
    </form>
  </div>
</div>
    </>
    );
};

export default Login;