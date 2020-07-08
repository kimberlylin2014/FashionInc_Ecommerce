import React from 'react';
import './userAccountPage.styles.scss';


import UserAccount from '../../components/userAccount/userAccount.component'

const UserAccountPage = () => {
    return(
        <div className='UserAccountPage'>
           <UserAccount />
        </div>
    )
}

export default UserAccountPage