import React from 'react'

import logo from '../../assets/img/logo76.png';

const Register = () => {
    return (
        <div className="d-flex flex-column flex-center p1 w-100">
           <div className="logo hidden-overflow mb1">
               <img src={logo} alt="app-logo" className="h-100 w-100"/>
           </div>
           <h2 className="text-uppercase mb1">Create an Account</h2>
           <form className="w-100" autoComplete="off">
               <div className="form-group">
                   <label htmlFor="name">Name *</label>
                   <input type="text" id="name" name="name" className="form-control"
                   placeholder="Enter your name"/>
               </div>
               <div className="form-group">
                   <label htmlFor="email">Email *</label>
                   <input type="email" id="email" name="email" className="form-control"
                   placeholder="Enter your email"/>
                   <small className="form-message default small">We'll never share your email with anyone else.</small>
               </div>
               <div className="form-group">
                   <label htmlFor="password" className="">Password *</label>
                   <input type="password" id="password" name="password" className="form-control"
                   placeholder="Enter your password"/>
               </div>
               <div className="form-group">
                   <label htmlFor="confirmPassword" className="">Password (Confirm) *</label>
                   <input type="password" id="confirmPassword" name="confirmPassword" className="form-control"
                   placeholder="Confirm your password"/>
               </div>
           </form>
           <button disabled className="btn text-upercase w-100 btn-primary raised">Create an account</button>
         
           <div className="d-flex flex-column text-center mt1">
             <span style={{marginBottom: '0.5rem'}}>Already have an account?</span>
             <a href="#" className="link">Login</a>
           </div>

        </div>
    )
}

export default Register
