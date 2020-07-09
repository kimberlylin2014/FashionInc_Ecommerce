import React from 'react';
import './checkoutShoppingBag.styles.scss';

import { selectCartItems, getTotalCartCost } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutShoppingBagItem from '../checkoutShoppingBagItem/checkoutShoppingBagItem.component'
import CustomButton from '../customButton/customButton.component'

const CheckoutShoppingBag = ({cartItems, totalCartCost}) => {

    return (
        <div className='CheckoutShoppingBag container'>
                <h4 className='mb-3'>My Shopping Bag</h4>
                <div className='header'> 
                    <div className='product'>
                        <h4>Product</h4>
                    </div>
                    <div className='name'>
                        <h4>Name</h4>
                    </div>
                    <div className='quantity'>
                        <h4>Quantity</h4>
                    </div>
                    <div className='price'>
                        <h4>Price</h4>
                    </div>
                </div>
                <div className='list-items'>
                {cartItems.map(item => {
                    return <CheckoutShoppingBagItem key={item.id} item={item}/>
                })}
            </div>
            <div className='footer'>
                <h6>Total: ${totalCartCost}</h6>
                <CustomButton type='button'>Buy</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCartCost: getTotalCartCost
})
export default connect(mapStateToProps)(CheckoutShoppingBag);