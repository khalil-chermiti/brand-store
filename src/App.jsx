import React from "react";
import { Routes, Route , Navigate} from "react-router-dom";

import { connect } from "react-redux";
import setCurrentUser from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignINandUpPage from "./pages/signingpage/signing.component";
import CheckoutPage from "./pages/checkoutpage/checkout.component";

import "./App.css";
import { auth , createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {

    // distructuring currentUser from props
    const {setCurrentUser} = this.props ;

    // OnAuthStateChange  returns a unsubscribe function 
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {

      if(user) {

        // creating user 
        const userRef = await createUserProfileDocument(user) ;
        
        // on snapshot change we update state
        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id ,
              ...snapShot.data()
            })
        });

      }
      
      // if we get null object from firebase (user logged out or unsigned in)
      setCurrentUser(user) ;
    });
  } 

  componentWillUnmount() {
    this.unSubscribeFromAuth() ;
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// get user object for conditionally render the signin page
const mapState = ({user}) => ({
  currentUser : user.currentUser ,
})

export default connect(mapState, mapDispatch)(App);