import React from 'react';
import './checkoutDropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleDisplay } from '../../redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import DropDownItem from '../dropDownItem/dropDownItem.component'
import CustomButton from '../customButton/customButton.component'
import {withRouter} from 'react-router-dom'



const CheckoutDropdown = ({items, toggleDisplay, history}) => {
    console.log(items)
    return (
        <div className='CheckoutDropdown' >
            <div className='checkout-btn'>
                {items.length === 0 ?  "" : (
                    <CustomButton 
                        type='button' 
                        onClick={() => {
                            history.push('/checkoutPage');
                            toggleDisplay();
                    }}>
                        Check Out
                    </CustomButton>
                )}
            </div>
            {items.map(item => <DropDownItem key={item.id} item={item}/>)}
            <div className='message'>
                {items.length === 0 ?  "No Items Added" : ""}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDisplay: () => dispatch(toggleDisplay())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutDropdown));