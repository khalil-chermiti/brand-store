import React from "react";
import { Routes, Route , Navigate} from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignINandUpPage from "./pages/signingpage/signing.component";
import CheckoutPage from "./pages/checkoutpage/checkout.component";

import "./App.css";

class App extends React.Component {

  componentDidMount() {
    const {checkUserSession} = this.props ;
    checkUserSession();
  }
  render() {
    const {currentUser} = this.props ;
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route
            path="signin"
            element={
              currentUser ? (
                <Navigate to="/" replace={true} />
              ) : (
                <SignINandUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

// dispatching actions to props
const mapDispatch = (dispatch) => ({
  checkUserSession : () => dispatch(checkUserSession()) ,
});

// get user object for conditionally render the signin page
const mapState = createStructuredSelector({
  currentUser : selectCurrentUser ,
})

export default connect(mapState, mapDispatch)(App);