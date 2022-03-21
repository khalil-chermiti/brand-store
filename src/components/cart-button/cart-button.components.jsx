import React from 'react'
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg' ;

import './cart-button.style.scss' ;

const CartButton = ({toggleCartDropdown}) => (
    <div className='cart-icon'>
        <ShoppingIcon className="shopping-icon" onClick={toggleCartDropdown}/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatch = dispatch => ({
    toggleCartDropdown : () => dispatch(toggleCart()),
}) ;

export default connect(null , mapDispatch)(CartButton);