import React from 'react';
import './directory-item.styles.scss';

import { withRouter } from 'react-router-dom';

const DirectoryItem = ({...section}) => {
    const {title, linkUrl, imageUrl, id, match, history} = section;
    console.log(section)
    console.log(linkUrl)
    return (
        <div className='DirectoryItem' onClick={() => history.push(`${match.path}/${linkUrl}`)} >
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className='content'>
                    <h3 className='title'>{title}</h3>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(DirectoryItem);