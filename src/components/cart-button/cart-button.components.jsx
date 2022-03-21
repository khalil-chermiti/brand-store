import React from 'react'
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg' ;

import './cart-button.style.scss' ;

const CartButton = ({toggleCartDropdown , getItemsCount}) => (
    <div className='cart-icon'>
        <ShoppingIcon className="shopping-icon" onClick={toggleCartDropdown}/>
        <span className='item-count'>{getItemsCount}</span>
    </div>
);

const mapDispatch = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleCart()),
}) ;

const mapState = ({cart :{items}}) => ({
    getItemsCount : items.reduce((acc , item) => acc + item.quantity , 0),
})

export default connect(mapState , mapDispatch)(CartButton);