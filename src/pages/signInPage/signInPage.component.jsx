import React from 'react';
import './signInPage.styles.scss';
import {Link} from 'react-router-dom'
import CustomSignInForm from '../../components/customSignInForm/customSignInForm.component'
import CustomButton from '../../components/customButton/customButton.component'
import { googleSignInStart } from '../../redux/user/user.actions'
import {connect} from 'react-redux'
const SignInPage = ({googleSignInStart}) => {

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
                        <CustomButton type='button' isGoogle onClick={googleSignInStart}>Google Login</CustomButton>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart())
    } 
}

export default connect(null, mapDispatchToProps)(SignInPage);