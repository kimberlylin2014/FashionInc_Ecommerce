import React from 'react';
import './directory-item.styles.scss';
import { withRouter } from 'react-router-dom';

const DirectoryItem = ({...section}) => {
    const {title, linkUrl, imageUrl, history} = section;
    return (
        <div className='DirectoryItem' onClick={() => history.push(`/${linkUrl}`)} >
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className='content'>
                    <h4 className='title'>{title}</h4>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(DirectoryItem);