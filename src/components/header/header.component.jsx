import React from 'react' ;
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartButton from '../cart-button/cart-button.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss';

const Header = ({ currentUser , isCartHidden }) => (
  <div className="header">

    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">

      <Link className="option" to="/shop">SHOP</Link>

      <Link className="option" to="/shop"> CONTACT </Link>

      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
        : 
        <Link className="option" to="/signin" >SIGN IN</Link>
      }

      <CartButton/>
      
    </div>
    {isCartHidden ? '': <CartDropdown />}

  </div>
);

// returning the values that we want from the state (currentUser in this case)
const mapState = ({user : {currentUser} , cart : {hidden}}) => ({
  currentUser : currentUser ,
  isCartHidden : hidden ,
})

export default connect(mapState)(Header) ;