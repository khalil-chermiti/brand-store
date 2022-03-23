import React from "react";
import  {Routes , Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.style.scss";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route path="/" element={<CollectionsOverview />} />
    </Routes>
  </div>
);

const Hello = () => (<h1>hello everyone</h1>) ;
export default ShopPage ;