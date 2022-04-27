import React , { useEffect} from "react";
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

const App = ({currentUser , checkUserSession}) => {

  useEffect(() => {
      checkUserSession();
  } , [checkUserSession]);

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
};

const mapDispatch = (dispatch) => ({
  checkUserSession : () => dispatch(checkUserSession()) ,
});

const mapState = createStructuredSelector({
  currentUser : selectCurrentUser ,
})

export default connect(mapState, mapDispatch)(App);