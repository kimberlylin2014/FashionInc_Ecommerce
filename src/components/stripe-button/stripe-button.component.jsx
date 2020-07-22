import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { emptyCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';

const StripeCheckoutButton = ({price, emptyCart}) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51H1KMcBpfiea75GWtF4BnES4kssFMmWtrfakxQP7lXmAtsGtDjbdywb9ZJ7IkWXZf8712W4dUWIcC5uLABO7ev0Q00rOgoaC2j';

    const onToken = token => {
        alert('Payment Successful!')
        emptyCart();

    }
    return (
        <StripeCheckout 
            label='Purchase'
            name ='Trending Inc.'
            // billingAddress
            // shippingAddress
            description={`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey ={publishKey}
        />
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        emptyCart: () => dispatch(emptyCart())
    }
}
export default connect(null, mapDispatchToProps)(StripeCheckoutButton);