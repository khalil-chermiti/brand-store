import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignINandUpPage from "./pages/signingpage/signing.component";

import "./App.css";
import { auth , createUserProfileDocument} from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {

    // OnAuthStateChange  returns a unsubscribe function 
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {

      if(user) {

        // creating user 
        const userRef = await createUserProfileDocument(user) ;
        
        // on snapshot change we reset state
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id ,
              ...snapShot.data()
            }
          })
        });

      }
      
      this.setState({currentUser: user}) ;
    });
  } 

  componentWillUnmount() {
    this.unSubscribeFromAuth() ;
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignINandUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;