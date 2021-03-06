import React from 'react';
import './shop-item.styles.scss';
import CustomButton from '../customButton/customButton.component'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'

const ShopItem = ({...props}) => {
    const {item : {imageUrl, name, price}, colNum, addItem} = props;
    return(
        <div className={`ShopItem ${colNum} col-sm-6 col-12`}>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
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