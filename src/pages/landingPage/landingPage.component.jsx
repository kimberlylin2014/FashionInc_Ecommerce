import React from 'react';
import './landingPage.styles.scss';
import CustomButton from '../../components/customButton/customButton.component'
import {withRouter} from 'react-router-dom'

const LandingPage = ({history}) => {
    return (
        <div className='LandingPage'>
            <div className='background-image'>
                <div className='overlay'></div>
                <div className='main-title'>
                    <h1>New Arrivals 2020</h1>
                    <CustomButton onClick={() => history.push('/SignIn')}>Shop Now</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LandingPage);