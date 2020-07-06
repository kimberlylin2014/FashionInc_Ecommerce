import React from 'react';
import './customButton.styles.scss';

const CustomButton = ({...props}) => {
    const {type, onClick, children, isGoogle, isFB, isSignIn} = props;
    return (
        <div className='CustomButton'>
            <button 
                className=
                {`btn btn-light 
                ${isGoogle ? 'google' : ''} 
                ${isFB ? 'fb' : ''}
                ${isSignIn? 'signin' : ''}
                `} 
                type={type} 
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export default CustomButton;