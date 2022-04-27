import React from 'react' ;

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems , selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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

        {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}

        <div className='total'>TOTAL: ${total }</div>

        {total > 0 ? <StripeCheckoutButton  price={total} /> : '' }

        <div className='test-warning'>
            Please use the following test credit card for payment
            <br/>
            4242 4242 4242 4242 - Exp : (any future date) - CVV : 123
        </div>
    </div>
) ; 

const mapState = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapState)(CheckoutPage) ;