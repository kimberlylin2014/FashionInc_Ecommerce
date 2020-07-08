import React from 'react';
import './userAccount.styles.scss';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';

import { Form } from 'reactstrap'
import CustomFormInput from '../customFormInput/customFormInput.component'
import CustomButton from '../customButton/customButton.component'

import {firestore} from '../../firebase/firebase.util'

class UserAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            enabledDisplayNameInput: false,
            editButtonDisable: false,
        }
        this.handleUpdateUserAccount = this.handleUpdateUserAccount.bind(this)
        this.enableEdit = this.enableEdit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    componentDidMount() {
        const {currentUser} = this.props;
        this.setState({
            displayName: currentUser.displayName,
            enabledDisplayNameInput: false,
            editButtonDisable: false,
        })
    }
    async handleUpdateUserAccount(e) {
        e.preventDefault();
        const {currentUser} = this.props;
        let userRef = await firestore.doc(`users/${currentUser.id}`)
        let userSnapShot = await userRef.get();
        if(userSnapShot.exists) {
            await userRef.update({
                ...currentUser,
                displayName: this.state.displayName
            });
            this.setState({
                enabledDisplayNameInput: false,
                editButtonDisable: false
            })
        }
    }
    enableEdit() {
        this.setState({
            enabledDisplayNameInput: true,
            editButtonDisable: true
        })
    }
    handleOnChange(e) {
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }
    render() {
        const {currentUser} = this.props;
    return (
        <div className='UserAccount'>
            <h3>{currentUser.displayName}'s Account</h3>
            <Form>
                <CustomFormInput 
                    label='Email'
                    name='email'
                    value = {currentUser.email}
                    disabled
                />
                {this.state.enabledDisplayNameInput ? (
                    <CustomFormInput 
                        label='Display Name'
                        name='displayName'
                        value = {this.state.displayName}
                        handleOnChange = {this.handleOnChange}
                    />
                ) : (
                    <CustomFormInput 
                        label='Display Name'
                        name='displayName'
                        value = {this.state.displayName}
                        disabled
                    />
                ) 
                }
                <CustomButton  type='button' onClick={this.enableEdit} disabled={this.state.editButtonDisable}>Edit Name</CustomButton>
                <CustomButton type='submit' onClick={this.handleUpdateUserAccount} disabled={!this.state.editButtonDisable}>Update Account</CustomButton>
            </Form>
        </div>
    )
    }
    
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(UserAccount);