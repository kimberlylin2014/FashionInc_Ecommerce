import React from 'react';
import './signUpPage.styles.scss';
import {Link} from 'react-router-dom'
import CustomSignUpForm from '../../components/customSignUpForm/customSignUpForm.component'

const SignUpPage = () => {
    return (
        <div className='SignUpPage'> 
            <div className='container'>
                <h1 className='header'>Sign Up</h1>
                <p className='text-center'>Already Have An Account? <Link exact to='/SignIn'>Sign In</Link></p>
                <div className='login-section'>
                    <div className='form'>
                       <CustomSignUpForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;