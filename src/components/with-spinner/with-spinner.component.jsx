import React from 'react';
import {Spinner} from 'reactstrap';
import './with-spinner.styles.scss'

const WithSpinner = (WrappedComponent) => {
    const spinnerComponent = ({isLoading, ...props}) => {
        return isLoading ?
        (
            <div className='spinner-page'>
                <div className='spinner'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
        ) : 
        (
            <WrappedComponent {...props} />
        );
    }
    return spinnerComponent;
}

export default WithSpinner;