import React from 'react';
import './shop-item.styles.scss';

const ShopItem = (props) => {
    const {imageUrl, name, price} = props;
    return(
        <div className='ShopItem col-4'>
            <div className='image'>
                 <img src={imageUrl}/>
            </div>
            <div className='detail'>
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}

export default ShopItem;