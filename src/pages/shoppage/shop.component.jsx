import React from "react";
import CollectionPreview from "../../components/preview-collection/collection-preview.component.jsx";
import SHOP_DATA from "./SHOP_DATA.js";
import "./shop.style.scss";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othersProps }) => (
          <CollectionPreview key={id} {...othersProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
