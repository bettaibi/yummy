import React, { ComponentProps } from 'react';
import * as Yup from 'yup';
import logo from '../../assets/img/logo76.png';

import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { register } from '../../services/AuthService';
import { useHistory } from 'react-router-dom';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const InitialFormValues: RegisterForm = { name: '', email: '', password: '', confirmPassword: '' };

const ErrorMessageSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password should has 6 letters or more.'),
    confirmPassword: Yup.string().required('Password is required').min(6, 'Password should has 6 letters or more.')
    .oneOf([Yup.ref('password')], "Password must match")
})

const Register: React.FC = () => {
    const history = useHistory();

    const create = async (values: RegisterForm) =>{
        try{
           let created = await register({
               email: values.email, 
               name: values.name, 
               password: values.password
            });
            if(created){
                localStorage.setItem('token', created.id || '') ;
                setTimeout(()=>{
                    history.push('/')
                },3000);
            }
        }
        catch(err){
            console.error(err.message);
        }
    }

    return (
        <div className="d-flex flex-column flex-center p1 w-100">
            <div className="logo hidden-overflow mb1">
                <img src={logo} alt="app-logo" className="h-100 w-100 rounded-circle shadow-sm" />
            </div>
            <h2 className="text-uppercase mb1">Create an Account</h2>

            <Formik initialValues={InitialFormValues} validationSchema={ErrorMessageSchema}
                onSubmit={(values) => create(values)}>
                {({values, errors, touched, handleSubmit, handleChange, handleBlur, isValid, isSubmitting}) => (
                    <form className="w-100" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className={errors.name && touched.name ? 'error': ''}>Name *</label>
                            <input type="text" id="name" name="name" className={`form-control ${errors.name && touched.name? 'error': ''}`}
                                placeholder="Enter your name"
                            onChange={handleChange} onBlur={handleBlur} value={values.name} />
                            {errors.name && touched.name && <small className="form-message error">{errors.name}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className={errors.email && touched.email ? 'error': ''}>Email *</label>
                            <input type="email" id="email" name="email" className={`form-control ${errors.email && touched.email? 'error': ''}`}
                                placeholder="Enter your email"
                                onChange={handleChange} onBlur={handleBlur} value={values.email}  />
                            {!errors.email && <small className="form-message default small">We'll never share your email with anyone else.</small>}
                            {errors.email && touched.email && <small className="form-message error">{errors.email}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className={errors.password && touched.password ? 'error': ''}>Password *</label>
                            <input type="password" id="password" name="password" className={`form-control ${errors.password && touched.password? 'error': ''}`}
                                placeholder="Enter your password"
                                onChange={handleChange} onBlur={handleBlur} value={values.password} />
                             {errors.password && touched.password && <small className="form-message error">{errors.password}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className={errors.confirmPassword && touched.confirmPassword ? 'error': ''}>Password (Confirm) *</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className={`form-control ${errors.confirmPassword && touched.confirmPassword? 'error': ''}`}
                                placeholder="Confirm your password" 
                                onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
                             {errors.confirmPassword && touched.confirmPassword && <small className="form-message error">{errors.confirmPassword}</small>}
                        </div>

                        <button disabled={ !isValid || !values.name || isSubmitting} type="submit" className="btn text-upercase w-100 btn-primary raised">{isSubmitting?'Loading...':'Create an account'}</button>
                    </form>
                )}
            </Formik>

            <div className="d-flex flex-column text-center mt1">
                <span style={{ marginBottom: '0.5rem' }}>Already have an account?</span>
                <Link to="/auth/login" className="link">Login</Link>
            </div>

        </div>
    )
}

export default Register
