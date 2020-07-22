import React, { Component } from 'react';
import './customSignInForm.styles.scss'
import { Form } from 'reactstrap';
import CustomFormInput from '../customFormInput/customFormInput.component'
import CustomButton from '../customButton/customButton.component'
import { emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux';

class CustomSignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }
    handleOnChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSignInClick(e) {
        const { email, password} = this.state;
        const { emailSignInStart } = this.props
        e.preventDefault();
        emailSignInStart(email, password)
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
                    type='password'
                />
                <CustomButton isSignIn type='submit' onClick={this.handleSignInClick}>Sign In</CustomButton>
            </Form>
        ) 
   }
}

const mapDispatchToProps = dispatch => {
    return {
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    }
}

export default connect(null, mapDispatchToProps)(CustomSignInForm);