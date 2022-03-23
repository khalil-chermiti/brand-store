import React from "react";

import { connect } from "react-redux";  
import { createStructuredSelector } from "reselect";
import { selectShopCollections} from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../../components/preview-collection/collection-preview.component.jsx";
import "./shop.style.scss";

const ShopPage = ({collections}) => (
  <div className="shop-page">
    {collections.map(({ id, ...othersProps }) => (
      <CollectionPreview key={id} {...othersProps} />
    ))}
  </div>
);

const mapState = createStructuredSelector({
  collections : selectShopCollections
}) ;

export default connect(mapState)(ShopPage);
