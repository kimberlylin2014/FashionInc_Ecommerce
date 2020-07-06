import React, { Component } from 'react';
import './customSignInForm.styles.scss'
import { Form } from 'reactstrap';
import CustomFormInput from '../customFormInput/customFormInput.component'
import CustomButton from '../customButton/customButton.component'

class CustomSignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <Form>
                <CustomFormInput 
                    label='Email'
                    name='email'
                    handleOnChange={this.handleOnChange}
                    value={this.state.email}
                />
                <CustomFormInput 
                    label='Password'
                    name='password'
                    handleOnChange={this.handleOnChange}
                    value={this.state.password}
                />
                <CustomButton isSignIn type='submit'>Sign In</CustomButton>
            </Form>
        ) 
   }
}

export default CustomSignInForm;