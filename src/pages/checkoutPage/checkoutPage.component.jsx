import React from 'react';
import './checkoutPage.styles.scss';



import CheckoutShoppingBag from '../../components/checkoutShoppingBag/checkoutShoppingBag.component'
const CheckoutPage = () => {
    return(
        <div class='CheckoutPage'>
            {/* <h1>Check Out</h1> */}
            <CheckoutShoppingBag />
        </div>
    )
}


export default CheckoutPage;