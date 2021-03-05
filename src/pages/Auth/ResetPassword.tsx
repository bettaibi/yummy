import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/img/logo76.png';

interface ResetPasswordForm{
    email: string;
    code: string;
    password: string;
    confirmPassword: string;
}

const ErrorMessageShema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    code: Yup.string().required('Code is Required'),
    password: Yup.string().required('Password Is required').min(6, "Password should be greater or equal to 6"),
    confirmPassword: Yup.string().required('This Field is required').min(6, "Password should be greater or equal to 6")
    .oneOf([Yup.ref('password')], 'Password must match')
});

const initialValues: ResetPasswordForm = { email: '', code: '', password: '', confirmPassword: '' };

const ResetPassword: React.FC = () => {
    const history = useHistory();
    

    return (
        <div className="d-flex flex-column flex-center p1 w-100">
            <div className="logo hidden-overflow mb1">
                <img src={logo} alt="app-logo" className="h-100 w-100 shadow-sm rounded-circle"/>
            </div>
            <h2 className="text-uppercase mb1">Reset your password</h2>
            <Formik initialValues={initialValues} validationSchema={ErrorMessageShema}
                onSubmit={(values) => { console.log(values) }}>
                {({ errors, touched, handleSubmit, handleChange, handleBlur ,values }) => (
                    <Steper handleSubmit={handleSubmit} errors = {errors} isEmailValid= {values.email !== ''}>
                        <div className="form-group">
                            <label htmlFor="email" className={errors.email && touched.email ? 'error' : ''}>Email *</label>
                            <input value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? 'error form-control' : 'form-control'}
                                type="email" id="email" name="email" placeholder="Enter your email" required />
                            {!errors.email?<small className="form-message default small">We'll never share your email with anyone else.</small>: null}
                            {errors.email && touched.email && <small className="form-message error">{errors.email}</small>}
                        </div>

                        <div className="w-100">

                            <div className="form-group">
                                <label htmlFor="code">Code*</label>
                                <input value={values.code} onChange={handleChange} onBlur={handleBlur} className={errors.code && touched.code ? 'error form-control' : 'form-control'}
                                    type="text" id="code" name="code" placeholder="Enter the received Code" required />
                                {errors.code && touched.code && (<small className="form-message error">{errors.code}</small>)}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className={errors.password && touched.password ? 'error' : ''}>New Password *</label>
                                <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" id="password" name="password" className={errors.password && touched.password ? 'error form-control' : 'form-control'}
                                    placeholder="Enter your password" required />
                                {errors.password && touched.password && (<small className="form-message error">{errors.password}</small>)}
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword" className={errors.confirmPassword && touched.confirmPassword ? 'error' : ''}>Password (Confirm) *</label>
                                <input value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} type="password" id="confirmPassword" name="confirmPassword" className={errors.confirmPassword && touched.confirmPassword ? 'error form-control' : 'form-control'}
                                    placeholder="Confirm your password" required />
                                {errors.confirmPassword && touched.confirmPassword && (<small className="form-message error">{errors.confirmPassword}</small>)}
                            </div>
                        </div>
                    </Steper>
                )}
            </Formik>
        </div>
    )
}

interface props {
    handleSubmit: any;
    children: React.ReactNode;
    errors: any;
    isEmailValid: boolean;
}

const Steper: React.FC<props> = ({ children, handleSubmit, errors, isEmailValid }) => {
    let [step, SetStep] = useState<number>(0);
    const wizard = React.Children.toArray(children);

    const next = (e: any) => {
        e.stopPropagation();
        SetStep(1);
    };

    const pervious = (e: any) => {
        e.stopPropagation();
        SetStep(0);
    }
    return (
        <React.Fragment>
            <div className="d-flex flex-row flex-space-between w-100" style={{margin: '1.3rem 0 1.3rem 0'}}>
                <div className={`pull fw-600 text-center d-flex flex-center ${(step==0)?'active ':''}` }>1</div>
                <div className="separator"></div>
                <div className={`pull fw-600 text-center d-flex flex-center ${(step==1)?'active ':''}` }>2</div>
            </div>
            <form className="w-100" autoComplete="off" onSubmit={handleSubmit}>
                {wizard[step]}

                <div className="text-right">
                    {step > 0 ? <button type="button" className="btn btn-secondary raised" onClick={pervious}>Previous</button> : null}
                    {step < wizard.length - 1 ? <button type="button" style={{ marginLeft: '0.5rem' }} className="btn btn-primary raised"
                     onClick={next} disabled={errors.email || !isEmailValid} >Next</button> : null}
                    {step == wizard.length - 1 ? <button type="submit" style={{ marginLeft: '0.5rem' }} className="btn btn-primary raised">Done</button> : null}
                </div>
            </form>
        </React.Fragment>
    )
}

export default ResetPassword
