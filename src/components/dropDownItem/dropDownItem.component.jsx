import React from 'react';
import './dropDownItem.styles.scss';

const DropDownItem = ({item}) => {
    const {imageUrl, name, quantity} = item;
    return(
        <div className='DropDownItem'>
            <img src={imageUrl} alt={name}/>
            <div className='detail'>
                 <span>{name}</span>
                 <span>Quantity: {quantity}</span>
            </div>
         
        </div>
    )
}

export default DropDownItem;