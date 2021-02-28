import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ResetPassword: React.FC = () => {

    return (
        <div className="p1">
            <h2 className="text-uppercase mb1">Reset your password</h2>
            <Formik initialValues={{ email: '', code: '', password: '', confirmPassword: '' }}
                onSubmit={(values) => { console.log(values) }}>
                {({ errors, touched, handleSubmit}) => (
                    <Steper handleSubmit = {handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className={errors.email && touched.email ? 'error' : ''}>Email *</label>
                            <input className={errors.email && touched.email ? 'error form-control' : 'form-control'} type="email" id="email" name="email" placeholder="Enter your email" />
                            <small className="form-message default small">We'll never share your email with anyone else.</small>
                            {errors.email && touched.email ? (<small className="form-message error">Invalid Email</small>) : null}
                        </div>

                        <div className="w-100">

                            <div className="form-group">
                                <label htmlFor="code">Code*</label>
                                <input className={errors.code && touched.code ? 'error form-control' : 'form-control'} type="text" id="code" name="code" placeholder="Enter the received Code" />
                                {errors.code && touched.code ? (<small className="form-message error">Code is Incorrect</small>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className={errors.password && touched.password ? 'error' : ''}>New Password *</label>
                                <input type="password" id="password" name="password" className={errors.password && touched.password ? 'error form-control' : 'form-control'}
                                    placeholder="Enter your password" />
                                {errors.password && touched.password ? (<small className="form-message error">Password is required</small>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword" className={errors.confirmPassword && touched.confirmPassword ? 'error' : ''}>Password (Confirm) *</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" className={errors.confirmPassword && touched.confirmPassword ? 'error form-control' : 'form-control'}
                                    placeholder="Confirm your password" />
                                {errors.confirmPassword && touched.confirmPassword ? (<small className="form-message error">Password is required</small>) : null}
                            </div>
                        </div>
                    </Steper>
                )}
            </Formik>
        </div>
    )
}

interface props{
    handleSubmit: any
}

const Steper: React.FC<props> = ({ children, handleSubmit }) => {
    let [step, SetStep] = useState<number>(0);
    const wizard = React.Children.toArray(children);
    console.log("lkdkdkldkl")

    const next = (e: any) =>{
        e.stopPropagation();
        SetStep(1);
    };

    const pervious = (e:any) =>{
        e.stopPropagation();
        SetStep(0);
    }
    return (
        <React.Fragment>
            <div className="mb1">step N { step + 1 }</div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                {wizard[step]}

             {step > 0 ?<button type="button" className="btn btn-secondary raised" onClick={pervious}>Previous</button>: null}
             {step< wizard.length-1?<button type="button" className="btn btn-primary raised ml1" onClick={next}>Next</button>: null}
             {step == wizard.length-1?<button type="submit" className="btn btn-secondary raised ml1">Done</button>: null}
            </form>
        </React.Fragment>
    )
}

export default ResetPassword
