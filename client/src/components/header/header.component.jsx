import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectIsCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartButton from "../cart-button/cart-button.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.style";

const Header = ({ currentUser, isCartHidden , signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop"> CONTACT </OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}

      <CartButton />
    </OptionsContainer>

    {isCartHidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapDispatch = (dispatch) => ({
  signOutStart : () => dispatch(signOutStart())
}) ;

// returning the values that we want from the state (currentUser in this case)
const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectIsCartHidden,
});

export default connect(mapState , mapDispatch)(Header);
