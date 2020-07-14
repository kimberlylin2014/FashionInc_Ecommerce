import React from 'react';
import './checkoutShoppingBag.styles.scss';

import { selectCartItems, getTotalCartCost } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutShoppingBagItem from '../checkoutShoppingBagItem/checkoutShoppingBagItem.component'

import StripeCheckoutButton from '../stripe-button/stripe-button.component'

const CheckoutShoppingBag = ({cartItems, totalCartCost}) => {

    return (
        <div className='CheckoutBagSection'>
            <div className='CheckoutShoppingBag-Mobile container'>
                <h5 className='mb-3'>My Shopping Bag</h5>
                <div className='mobile-items'>
                    {cartItems.length === 0 ? (
                        <div className='empty-message'>
                        Your Shopping Bag is Currently Empty
                        </div>
                    ): ''}
                    {cartItems.length > 0 ? (
                        <div className='list-items'>
                            {cartItems.map(item => {
                            return <CheckoutShoppingBagItem key={item.id} item={item}/>
                            })}
                        </div>
                    ): ''}
                    
                </div>
                {cartItems.length > 0 ? (
                    <div className='footer'>
                        <h6>Total: ${totalCartCost}</h6>
                        <StripeCheckoutButton price={totalCartCost}/>
                    </div>
                ): ''}
            </div>
            <div className='CheckoutShoppingBag container'>
                <h5 className='mb-3'>My Shopping Bag</h5>
                <div className='header'> 
                    <div className='product'>
                        <h5>Product</h5>
                    </div>
                    <div className='name'>
                        <h5>Name</h5>
                    </div>
                    <div className='quantity'>
                        <h5>Quantity</h5>
                    </div>
                    <div className='price'>
                        <h5>Price</h5>
                    </div>
                    <div className='remove'>
                        <h5>Remove</h5>
                    </div>
                </div>
                {cartItems.length === 0 ? (
                    <div className='empty-message'>
                    Your Shopping Bag is Currently Empty
                    </div>
                ): ''}
                {cartItems.length > 0 ? (
                    <div className='list-items'>
                    {cartItems.map(item => {
                    return <CheckoutShoppingBagItem key={item.id} item={item}/>
                    })}
                    </div>
                ): ''}
                {cartItems.length > 0 ? (
                    <div className='footer'>
                    <h6>Total: ${totalCartCost}</h6>
                    <StripeCheckoutButton price={totalCartCost}/>
                </div>
                ): ''}
            </div>
        </div>
        
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCartCost: getTotalCartCost
})
export default connect(mapStateToProps)(CheckoutShoppingBag);