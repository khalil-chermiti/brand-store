import React from 'react'
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg' ;

import './cart-button.style.scss' ;

const CartButton = ({toggleCartDropdown , getItemsCount}) => (
    <div className='cart-icon'  onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className='item-count'>{getItemsCount}</span>
    </div>
);

const mapDispatch = dispatch => ({
    toggleCartDropdown : (event) => dispatch(toggleCart()),
}) ;

const mapState = (state) => ({
    getItemsCount : selectCartCount(state),
})

export default connect(mapState , mapDispatch)(CartButton);