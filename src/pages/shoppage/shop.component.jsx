import React from "react";
import  {Routes , Route } from "react-router-dom";

import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import { connect } from "react-redux";
import {updateCollections} from '../../redux/shop/shop.actions'

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collectionpage/collection.component";

import "./shop.style.scss";

// HOCS 
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

  state = {
    loading : true 
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props ;

    // ! get collections from firebase 
    const collectionRef = firestore.collection("collections");

    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot) ;
    //   // update store with new collections from firestore
    //   updateCollections(collectionMap) ;
    //   this.setState({loading : false}) ;
    // });

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot) ;
      updateCollections(collectionMap);
      this.setState({loading : false});
    })

  }

  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={this.state.loading} />} />
          <Route path="/:categoryId" element={<CollectionsPageWithSpinner isLoading={this.state.loading} />} />
        </Routes>
      </div>
    );
  }
};

const mapDispatch = dispatch => ({
  updateCollections : collectionMap => dispatch(updateCollections(collectionMap)) ,
})

export default connect(null , mapDispatch)(ShopPage);