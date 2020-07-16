import React from 'react';
import './shopOverviewPage.styles.scss';

import {selectCollectionPreview} from '../../redux/shop/shop.selectors';
import  {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import SectionPreview from '../../components/sectionPreview/sectionPreview.component'

const ShopOverviewPage = ({collectionPreview}) => {
    return (
        <div className='ShopOverview'>
            <h1 className='text-center mt-5 mb-5'>Collections</h1>
            {collectionPreview.map(preview =>(
                <SectionPreview key={preview.id} {...preview}/>
            ) )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collectionPreview: selectCollectionPreview
})
export default connect(mapStateToProps)(ShopOverviewPage);