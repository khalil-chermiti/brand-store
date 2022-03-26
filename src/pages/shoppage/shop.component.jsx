import React from "react";
import  {Routes , Route } from "react-router-dom";

import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import { connect } from "react-redux";
import {updateCollections} from '../../redux/shop/shop.actions'

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collectionpage/collection.component";

import "./shop.style.scss";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {

    const {updateCollections} = this.props ;

    // ! get collections from firebase 
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot) ;
      
      // update store with new collections from firestore
      updateCollections(collectionMap) ;
    });

  }

  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverview />} />
          <Route path="/:categoryId" element={<CollectionPage />} />
        </Routes>
      </div>
    );
  }
};

const mapDispatch = dispatch => ({
  updateCollections : collectionMap => dispatch(updateCollections(collectionMap)) ,
})

export default connect(null , mapDispatch)(ShopPage);