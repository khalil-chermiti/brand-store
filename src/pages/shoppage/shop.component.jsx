import React, {useEffect}  from "react";
import  {Routes , Route } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded , selectIsfetching } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collectionpage/collection.component";

import "./shop.style.scss";

// HOCS 
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


const ShopPage = ({fetchCollectionsStart , isFetching ,isCollectionsLoaded}) => {

  useEffect(() => {
    fetchCollectionsStart() ;
  } , [fetchCollectionsStart]) ;

  // ! we need to check if collections data is loaded before we render any component  

  return (
    <div className="shop-page">
      <Routes>
        <Route 
          path="/" 
          element={ 
            <CollectionsOverviewWithSpinner 
              isLoading={!isCollectionsLoaded || isFetching} 
            />} 
        />

        <Route 
          path="/:categoryId" 
          element={
            <CollectionsPageWithSpinner 
              isLoading={!isCollectionsLoaded || isFetching} 
            />}
          />
          
      </Routes>
    </div>
  );

};

const mapState = createStructuredSelector({
  isFetching : selectIsfetching ,
  isCollectionsLoaded : selectIsCollectionsLoaded
})

const mapDispatch = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()) ,
})

export default connect(mapState , mapDispatch)(ShopPage);

