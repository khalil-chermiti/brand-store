import React from 'react' ;
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">

      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
        : 
        <Link className="option" to="/signin" >SIGN IN</Link>
      }

    </div>
  </div>
);

// returning the values that we want from the state (currentUser in this case)
const mapState = (state) => ({
  currentUser : state.user.currentUser
})

export default connect(mapState)(Header) ;