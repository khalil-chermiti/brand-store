import React from 'react' ;

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems , selectCartTotatl} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.component.scss' ;

const CheckoutPage = ({cartItems , total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(item => <CheckoutItem key={item.key} cartItem={item}/>)}

        <div className='total'>
            <span>TOTAL: ${total }</span>
        </div>
    </div>
) ; 

const mapState = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotatl
})

export default connect(mapState)(CheckoutPage) ;