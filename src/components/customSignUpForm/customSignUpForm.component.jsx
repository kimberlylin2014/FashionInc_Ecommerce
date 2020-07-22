import React, { Component } from 'react';
import './customSignUpForm.styles.scss';
import {Form} from 'reactstrap'
import CustomFormInput from '../customFormInput/customFormInput.component';
import CustomButton from '../customButton/customButton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

import  { signUpStart } from '../../redux/user/user.actions';
import {connect} from 'react-redux'

class CustomSignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayName: ''
        }
        this.handleSignUpClick= this.handleSignUpClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    async handleSignUpClick(e) {
        e.preventDefault();
        const {displayName, email, password} = this.state;
        const {signUpStart} = this.props;
        // try {
        //     let {user} = await auth.createUserWithEmailAndPassword(email, password)
        //     createUserProfileDocument(user, {displayName});
        // } catch (error) {
        //     console.log(error);
        // }
        signUpStart({displayName, email, password})
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
                    label='Display Name'
                    name='displayName'
                    handleOnChange = {this.handleOnChange}
                    value = {this.state.displayName}
                />
                <CustomFormInput 
                    label='Email'
                    name='email'
                    handleOnChange = {this.handleOnChange}
                    value ={this.state.email}
                />
                <CustomFormInput 
                    label='Password'
                    name='password'
                    handleOnChange = {this.handleOnChange}
                    value ={this.state.password}
                    type='password'
                />
                <div>
                    <CustomButton isSignIn 
                                  onClick = {this.handleSignUpClick}
                    >Sign Up</CustomButton>
                </div>
                
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
    }
}
export default connect(null, mapDispatchToProps)(CustomSignUpForm);