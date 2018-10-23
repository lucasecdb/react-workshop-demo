import React, { Component } from "react";

const formatCurrency = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default class ProductPrice extends Component {
  render() {
    const { listPrice, price } = this.props;

    if (price === 0) {
      return (
        <div className="flex justify-center">
          <span className="c-muted-1 b f4">Indisponível</span>
        </div>
      );
    }

    return (
      <div className="flex flex-column justify-center items-center">
        {listPrice !== price && (
          <span className="f6 c-muted-2 strike">De {formatCurrency(listPrice)}</span>
        )}
        <span className="c-muted-1 b f4 pv2">Por {formatCurrency(price)}</span>
      </div>
    );
  }
}
