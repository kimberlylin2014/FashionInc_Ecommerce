import React from 'react';
import './homePage.styles.scss';

import Directory from '../../components/directory/directory.component'
const HomePage = (props) => {
    console.log(props)
    return (
        <div className='HomePage'>
            <Directory />
        </div>
    )
}


export default HomePage;