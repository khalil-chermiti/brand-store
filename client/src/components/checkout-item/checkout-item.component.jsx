import React from 'react' ;

import {connect} from 'react-redux' ;
import { removeItem , addItem , decreaseItemCount} from '../../redux/cart/cart.actions';

import './checkout-item.style.scss' 

const CheckoutItem = ({cartItem , clearItem , addItem , decreaseItemCount}) => {

    const {name , imageUrl , price , quantity} = cartItem

    return(
    <div className='checkout-item'>

        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>

        <span className='name'>{name}</span>

        <span className='quantity'>

            <div className='arrow' onClick={()=> decreaseItemCount(cartItem)}>&#10094;</div>

            <span className='value'>{quantity}</span>

            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>

        </span>

        <span className='price'>{price}</span>

        <div 
            className='remove-button'
            onClick={() => clearItem(cartItem)}
        >&#10005;</div>

    </div>

)} ;

const mapDispatch = dispatch => ({
    clearItem : (item) => dispatch(removeItem(item)),
    addItem : (item) => dispatch(addItem(item)),
    decreaseItemCount : (item) => dispatch(decreaseItemCount(item)),
})

export default connect(null , mapDispatch)(CheckoutItem) ;