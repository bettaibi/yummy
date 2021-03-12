import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo76.png';

import { login } from '../../services/AuthService';
import Google from '../../components/Google';
import Facebook from '../../components/Facebook';

import { useHistory} from 'react-router-dom';

import { Snackbar, SnackbarType, useSnackbar } from '../../components/Snackbar';


interface LoginForm {
    email: string;
    password: string;
}

const initialValues: LoginForm = {email: '', password: ''};

const ErrorMessageSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password should be greater or equal to 6')
});

const Login: React.FC = () => {
    const history = useHistory();
    const { snackbarRef, showMsg } = useSnackbar();

    const userLogin = async (values: LoginForm) => {
        try{
            const res = await login(values);
            if(res.success){
                showMsg(res.message);
                setTimeout(()=>{
                    history.push('/');
                },3000);
            }
            else{
                showMsg(res.message, SnackbarType.ERROR);
            }
        }
        catch(err){
            console.error(err.message);
        }
    }

    return (
        <div className="d-flex flex-column flex-center p1 w-100">
            <div className="logo hidden-overflow mb1">
                <img src={logo} alt="app-logo" className="h-100 w-100 shadow-sm rounded-circle" />
            </div>

            <Formik initialValues= {initialValues} validationSchema={ErrorMessageSchema}
            onSubmit= {(values)=> userLogin(values)}>
                {({errors, touched, handleBlur, handleChange, values, handleSubmit, isValid}) => (
                    <form className="w-100" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className={errors.email && touched.email? 'error': ''}>Email *</label>
                            <input type="email" id="email" name="email" className={`form-control ${errors.email && touched.email && 'error'}`} placeholder="Enter your email" 
                             value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                            {!errors.email && <small className="form-message default small">We'll never share your email with anyone else.</small>}
                            {errors.email && touched.email && <small className="form-message error">{errors.email}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className={errors.password && touched.password? 'error': ''}>Password *</label>
                            <input type="password" id="password" name="password" className={`form-control ${errors.password && touched.password && 'error'}`} placeholder="Enter your password" 
                            value={values.password} onChange={handleChange} onBlur={handleBlur} required />
                             {errors.password && touched.password && <small className="form-message error">{errors.password}</small>}
                        </div>

                        <div className="w-100 text-right mb1">
                            <Link to="/auth/rest-password" className="link">Reset Password?</Link>
                        </div>
                        <button type="submit" className="btn text-upercase w-100 btn-primary raised"
                        disabled={ !isValid || !values.email}>Login</button>
                    </form>
                )}
            </Formik>

            <div className="w-100 my-1 text-center">
                <span className="or-separator">
                    OR
                </span>
            </div>

            <Google />
            <Facebook />
          
            <div className="d-flex flex-column text-center mt1">
                <span style={{ marginBottom: '0.5rem' }}>Don't have an account?</span>
                <Link to="/auth/register" className="link">Create an account</Link>
            </div>
            <Snackbar ref={snackbarRef} />
        </div>
    )
}

export default Login
