import React from "react";

export default function CardItem({ product }) {
  console.log("productocarrrrrrr", product);

  return (
    <div className="cardItem">
      <img src={product.thumbnail} alt={product.title} title={product.title} />
      <div className="cardItem_info">
        <h1>{product.price}</h1>
        <h2>{product.title}</h2>
      </div>
      <div className="cardItem_state">
        <h4>{product.address.state_name}</h4>
      </div>
    </div>
  );
}
