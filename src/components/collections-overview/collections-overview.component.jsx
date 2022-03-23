import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors.js"; 

import CollectionPreview from '../preview-collection/collection-preview.component'
import "./collections-overview.style.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...othersProps }) => (
      <CollectionPreview key={id} {...othersProps} />
    ))}
  </div>
);

const mapState = createStructuredSelector({
    collections : selectShopCollections
}) ;
  
export default connect(mapState)(CollectionsOverview);
  