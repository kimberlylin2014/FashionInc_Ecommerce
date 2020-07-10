import React from 'react';
import './signInPage.styles.scss';
import {Link} from 'react-router-dom'
import CustomSignInForm from '../../components/customSignInForm/customSignInForm.component'
import CustomButton from '../../components/customButton/customButton.component'
import { signInWithGoogle } from '../../firebase/firebase.util'

const SignInPage = () => {
    return (
        <div className='SignInPage'> 
            <div className='container'>
                <h1 className='header'>Sign In</h1>
                <p className='text-center mb-5'>Don't Have An Account? <Link exact to='/SignUp'>Sign Up</Link></p>
                <div className='login-section'>
                    <div className='form'>
                       <CustomSignInForm/>
                    </div>
                    <div className='auth-buttons'>
                        {/* <CustomButton isFB>Login In With Facebook</CustomButton> */}
                        <CustomButton isGoogle onClick={signInWithGoogle}>Login In With Google</CustomButton>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}

export default SignInPage;