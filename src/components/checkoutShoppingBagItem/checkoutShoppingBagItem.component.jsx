import React from 'react';
import './checkoutShoppingBagItem.styles.scss';

import { addItem, deleteItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutShoppingBagItem = ({item, addItem, deleteItem}) => {
    const {imageUrl, name, quantity, price} = item;
    return (
        <div className='CheckoutShoppingBagItem'>
            <div className='product'>
                <img src={imageUrl} alt=""/>
            </div>
            <div className='name'>
                <span>{name}</span>
            </div>
            <div className='quantity'>
                <span>
                    <span className='decrease'
                          onClick={() => deleteItem(item)}
                    >&#10094;</span>
                    {quantity}
                    <span className='increase' 
                          onClick={() => addItem(item)}>&#10095;</span>
                </span>
            </div>
            <div className='price'>
                <span>$ {price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item)),
        deleteItem: (item) => dispatch(deleteItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutShoppingBagItem);