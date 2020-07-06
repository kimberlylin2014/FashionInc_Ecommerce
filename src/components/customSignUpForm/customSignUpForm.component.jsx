import React, { Component } from 'react';
import './customSignUpForm.styles.scss';
import {Form} from 'reactstrap'
import CustomFormInput from '../customFormInput/customFormInput.component';
import CustomButton from '../customButton/customButton.component';

class CustomSignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayName: ''
        }
    }
    render() {
        return (
            <Form>
                <CustomFormInput 
                    label='Display Name'
                    name='displayName'
                />
                <CustomFormInput 
                    label='Email'
                    name='email'
                />
                <CustomFormInput 
                    label='Password'
                    name='password'
                />
                <div>
                    <CustomButton isSignIn>Sign Up</CustomButton>
                </div>
                
            </Form>
        )
    }
}

export default CustomSignUpForm;