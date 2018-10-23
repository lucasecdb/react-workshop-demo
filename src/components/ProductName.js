import React, { Component } from "react";

export default class ProductName extends Component {
  render() {
    return <span className="c-muted-1">{this.props.name}</span>;
  }
}
