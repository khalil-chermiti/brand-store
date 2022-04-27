import React from 'react' ;
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss' ;

const CartDropdown = ({items , dispatch}) => {

    const navigate = useNavigate() ;

    return (

        <div className='cart-dropdown'>

            <div className='cart-items'> 
                {
                    items.length ?
                    (items.map(item => <CartItem key={item.id} item = {item}/>)) :
                    <span className="cart-empty" >cart is empty</span>
                }
            </div>

            <CustomButton 
                onClick={() => {
                        navigate("/checkout", { replace: true }) ;
                        dispatch(toggleCart());
                    }} 
            >
            CHECKOUT</CustomButton>

        </div> 

    ) ;
} 

const mapState = (state) => ({
    items : selectCartItems(state),
})

export default connect(mapState)(CartDropdown) ;