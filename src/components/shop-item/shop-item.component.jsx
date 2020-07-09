import React from 'react';
import './shop-item.styles.scss';
import CustomButton from '../customButton/customButton.component'

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'

const ShopItem = ({...props}) => {
    const {item : {imageUrl, name, price}, colNum, addItem} = props;
    return(
        <div className={`ShopItem ${colNum}`}>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
                 {/* <img src={imageUrl}/> */}
                 <div className='buy-button'>
                     <CustomButton type='button' onClick={()=> addItem(props.item)}>Add To Cart</CustomButton>
                 </div>
            </div>
            <div className='detail'>
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {addItem: (item) => dispatch(addItem(item))}
}

export default connect(null, mapDispatchToProps)(ShopItem);