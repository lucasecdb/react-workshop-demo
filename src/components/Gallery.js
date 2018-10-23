import React, { Component } from "react";

import ProductSummary from "./ProductSummary";
import "./Gallery.css";

export default class Gallery extends Component {
  render() {
    return (
      <div className="vtex-gallery ph3 pb3">
        {this.props.products.map(product => (
          <ProductSummary key={product.productId} product={product} />
        ))}
      </div>
    );
  }
}
