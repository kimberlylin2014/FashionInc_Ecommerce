import React from 'react';
import './sectionPreview.styles.scss';
import ShopItem from '../shop-item/shop-item.component';
import {withRouter} from 'react-router-dom'

const SectionPreview = (props) => {

    const {title, routeName, items, history, match} = props;
    console.log(routeName)
    console.log(props)
    return (
        <div className='SectionPreview container'>
            <h3 onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h3>
            <div className='content-preview row'>
                {items.filter((item, index) => index < 4).map(item => <ShopItem key={item.id} item={item} colNum='col-lg-3'/>)}
            </div>
        </div>
    )
}

export default withRouter(SectionPreview);