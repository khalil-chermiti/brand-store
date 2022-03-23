import React from "react";
import  {Routes , Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collectionpage/collection.component";

import "./shop.style.scss";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route path="/" element={<CollectionsOverview />} />
      <Route path='/:categoryId' element={<CollectionPage />} />
    </Routes>
  </div>
);


export default ShopPage ;