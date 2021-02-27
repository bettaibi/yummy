import React from 'react'

import logo from '../assets/img/logo76.png';

const Login = () => {
    return (
        <div className="d-flex flex-column flex-center p1 w-100">
           <div className="logo hidden-overflow mb1">
               <img src={logo} alt="app-logo" className="h-100 w-100"/>
           </div>
           <h2 className="text-uppercase mb1">Login to your Account</h2>
           <form className="w-100">
               <div className="form-group">
                   <label htmlFor="email">Email *</label>
                   <input type="email" id="email" name="email" className="form-control"
                   placeholder="Enter your email"/>
                   <small className="form-message default small">We'll never share your email with anyone else.</small>
               </div>
               <div className="form-group">
                   <label htmlFor="password" className="error">Password *</label>
                   <input type="password" id="password" name="password" className="form-control error"
                   placeholder="Enter your password"/>
               </div>
           </form>
           <div className="w-100 text-right mb1">
              <a href="#" className="link">Forgot Password?</a>
           </div>
           <button disabled className="btn text-upercase w-100 btn-primary raised">Login</button>
           <div className="w-100 my-1 text-center">
                <span className="or-separator">
                    OR
                </span>
           </div>
           <button className="btn btn-google raised" style={{marginBottom: '0.5rem', width: '200px'}}>Login with Google</button>
           <button className="btn btn-facebook raised" style={{width: '200px'}}>Login with Facebook</button>
           <div className="d-flex flex-column text-center mt1">
             <span style={{marginBottom: '0.5rem'}}>Don't have an account?</span>
             <a href="#" className="link">Create an account</a>
           </div>

        </div>
    )
}

export default Login
