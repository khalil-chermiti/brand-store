import React from 'react' ;

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss' ;

const CartDropdown = ({items}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
            {items.map(item => <CartItem key={item.id} item = {item}/>)}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
) ;

const mapState = (state) => ({
    items : selectCartItems(state),
})

export default connect(mapState)(CartDropdown) ;