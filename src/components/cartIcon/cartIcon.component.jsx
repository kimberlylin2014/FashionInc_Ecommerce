import React from 'react';
import './cartIcon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux'

import {toggleDisplay} from '../../redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import {getTotalCartQuantity} from '../../redux/cart/cart.selectors'
const CartIcon = ({toggleDisplay, totalCartQuantity}) => {
    return(
        <div className='CartIcon'
             onClick={() => toggleDisplay()}         
        >
            <ShoppingIcon className='icon'/>
            <span className='itemCount'>{totalCartQuantity}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDisplay: () => dispatch(toggleDisplay())
    }
}

const mapStateToProps = createStructuredSelector({
    totalCartQuantity: getTotalCartQuantity
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);