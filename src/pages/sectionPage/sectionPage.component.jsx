import React from 'react';

import { selectCollectionSection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import ShopItem from '../../components/shop-item/shop-item.component'

const SectionPage = (props) => {
    const {section} = props;
    console.log(props);
    return (
        <div>
            <h1 className='text-center mt-5 mb-5'>{section.title}</h1>
            <div className='section-items container'>
                <div className='row'>
                    {section.items.map(item => (
                        <ShopItem key={item.id} item={item} colNum='col-3'/>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {section: selectCollectionSection(props.match.params.section)(state)}
}

export default connect(mapStateToProps)(SectionPage);


