import React, { Component } from "react";

import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

export default class ProductSummary extends Component {
  render() {
    const { product } = this.props;
    const sku = product.items[0];
    const { commertialOffer } = sku.sellers[0];

    return (
      <div
        className="center ba br2 b--muted-3 hover-b--action-primary pointer pa1"
        style={{ width: 273 }}
      >
        <div
          className="w-100"
          style={{
            paddingTop: "100%",
            background: "50%/contain no-repeat",
            backgroundImage: `url(${sku.images[0].imageUrl})`
          }}
        />
        <div className="tc pv4 h3 flex justify-center items-center">
          <ProductName name={product.productName} />
        </div>
        <div className="pv4 h3">
          <ProductPrice
            listPrice={commertialOffer.ListPrice}
            price={commertialOffer.Price}
          />
        </div>
      </div>
    );
  }
}
