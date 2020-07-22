import React from 'react';
import './directory.styles.scss'
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect'
import DirectoryItem from '../directory-item/directory-item.component'

const Directory = ({ sections }) => {
    return (
        <div className='Directory'>
            <div className='container'>
                {sections.map(section => (
                    <DirectoryItem key={section.id} {...section} />
                ))}
            </div> 
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);