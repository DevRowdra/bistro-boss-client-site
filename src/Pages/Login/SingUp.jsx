import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Auth/AuthProvider';
import { Link } from 'react-router-dom';
const SingUp = () => {
const {createUser}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=data=>{
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
       <>
       <Helmet>
        <title>Bistro Boss|| Sing in</title>
       </Helmet>
       
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' {...register("name",{required:true})} placeholder="name" className="input input-bordered" />
                {errors.name && <p className='text-red-600'>plz input full name</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" {...register("email")} name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name='password' {...register("password", { required: true , minLength:5, maxLength: 20 ,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} className="input input-bordered" />
                {errors.password?.type === "required" && <p>password must be 6 characters</p>}
                {errors.password?.type === "pattern" && <p>password must have one capital letter one number and one small letter</p>}
              </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Already Have an Account <Link to={'/login'}>Login please</Link></a>
                </label>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sing Up" />
                
              </div>
            </form>
          </div>
        </div>
      </div>
       </>
    );
};

export default SingUp;